const { test, expect } = require("@playwright/test");
test.describe.configure({mode:'parallel'})

test('First Playwright Test', async function() {
    
}) // older format for test case

test('Browser Context Playwright Test', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://google.com")
    console.log(await page.title())
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standarduser")// for css selector locator if it's id # if it's class then . should be given
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    console.log(await page.locator(".error-message-container.error").textContent())
    await expect(page.locator(".error-message-container.error")).toContainText("Epic sadface")
    await expect(page.locator(".error-message-container.error")).toHaveText("Epic sadface: Username and password do not match any user in this service")
    const username = page.locator("#user-name")
    const login = page.locator("#login-button")
    const cardTitle = page.locator(".inventory_item_name ")
    await username.fill(" ")
    await username.fill("standard_user")
    await login.click()
    console.log(await cardTitle.first().textContent())
    console.log(await cardTitle.nth(1).textContent())
    console.log(await cardTitle.allTextContents())
    //await page.pause() // temporary pause to check the browser page , so the inspector shows up as well
}
)
test('Page Context Playwright test', async({page})=>{
    await page.goto("https://google.com")
    console.log(await page.title())
    await expect(page).toHaveTitle("Google")
})
//ui controls
test('UI controls',async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    await page.locator(".nav-item").nth(1).click()
    //checkbox
    await page.locator(".list-group-item").nth(1).click()
    await page.locator("#gridCheck").check()
    await expect(page.locator("#gridCheck")).toBeChecked()           //1st assertion
    expect(await page.locator("#gridCheck").isChecked()).toBeTruthy() // same thing different method of assertion
    //radio button
    await page.locator(".list-group-item").nth(2).click()
    await page.locator("#inlineRadio1").check()
    await expect(page.locator("#inlineRadio1")).toBeChecked()
    await page.locator("#inlineRadio24").check()  
    expect(await page.locator("#inlineRadio24").isChecked()).toBeTruthy()
    //drop down
    await page.locator("//a[normalize-space()='Select Input']").click()
    await page.locator("#single-input-field").selectOption("Red")
    await expect(page.locator("#single-input-field")).toHaveValue("Red")
    //Form submit
    await page.locator("//a[normalize-space()='Form Submit']").click()
    await page.locator("#validationCustom01").fill("Hima")
    await page.locator("#validationCustom02").fill("Thomas")
    await page.locator("#validationCustomUsername").fill("HT")
    await page.locator("#validationCustom03").fill("Kitchener")
    await page.locator("#validationCustom04").fill("Ontario")
    await page.locator("#validationCustom05").fill("N2A0J3")
    await page.locator("#invalidCheck").click()
    await page.locator(".btn.btn-primary").click()
    await expect(page.locator("#message-one")).toHaveText("Form has been submitted successfully!")
    //simple form demo
    await page.locator(".list-group-item").nth(0).click()
    await page.locator("#single-input-field").fill("Hello World!")
    await page.locator("#button-one").click()
    await expect(page.locator("#message-one")).toHaveText("Your Message : Hello World!")
    //await page.pause()

})

test('Child Window and New Tab', async({browser})=>{
   const context = await browser.newContext()
   const page = await context.newPage()
   await page.goto("https://www.google.com")
   const newPage = await Promise.all([
    context.waitForEvent('page'), 
    page.evaluate(()=>window.open("https://www.github.com"))
   ])
   const newTab = await context.newPage()
   await newTab.goto("https://www.saucedemo.com")
   //await page.pause()
}) 
const date = 12
const month = 11
const year = 1997
test('Calendar Validation', async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    await page.locator(".nav-item").nth(2).click()
    await page.locator(".list-group-item").first().click()
    await page.locator("#single-input-field").click()
    //click on month/year header to switch to month view
    await page.locator(".datepicker-days th.datepicker-switch").click()
    await page.locator(".datepicker-months th.datepicker-switch").click()
    //navigate to correct decade for 1997
    const targetYear = 1997
    while(true){
        const currentDecade = await page.locator(".datepicker-years th.datepicker-switch").textContent()
        const startDecade = parseInt(currentDecade.split("-")[0])
        if(targetYear>=startDecade && targetYear<=startDecade + 9){
           break
        }
        if(targetYear<startDecade){
            await page.locator(".datepicker-years th.prev").click()
        }
        else {
            await page.locator(".datepicker-years th.next").click()
        }   
    }
    //select the target year
    await page.getByText(targetYear.toString(),{exact:true}).click()
    await page.locator(".month").nth(month-1).click()
    await page.getByText(date.toString(),{exact:true}).click()
    //await page.pause()
})

//codegen code

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Hima');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Thomas');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('hu2 j87');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
});
//special locators
test('special locators',async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    //await page.locator(".nav-item").nth(1).click()
    await page.getByRole("link",{name:'Input Form'}).click()
    //await page.locator(".list-group-item").nth(1).click()
    await page.getByRole("link",{name:'Checkbox Demo'}).click()
    await page.getByLabel("Click on this check box").check()
    //await page.locator(".list-group-item").nth(2).click()
    await page.getByRole("link",{name:'Radio Buttons Demo'}).click()
    await page.getByLabel("45 to 60").check()
    //await page.locator("//a[normalize-space()='Select Input']").click()
    await page.getByRole("link",{name:'Select Input'}).click()
    await page.getByLabel("Select Color").selectOption("Red")
    //await page.locator("//a[normalize-space()='Form Submit']").click()
    await page.getByRole("link",{name:'Form Submit',exact: true}).click()
    await page.getByPlaceholder("First name").fill("Hima")
    await page.getByPlaceholder("Last name").fill("Thomas")
    await page.getByPlaceholder("Username").fill("HT")
    await page.getByPlaceholder("City").fill("Toronto")
    await page.getByPlaceholder("State").fill("On")
    await page.getByPlaceholder("Zip").fill("N2A")
    await page.getByLabel("Agree to terms and conditions").check()
    await page.getByRole("button",{name:'Submit form'}).click() // button, link
    await expect(page.getByText("Form has been submitted successfully!")).toBeVisible()
    await page.getByRole("link",{name:'Simple Form Demo'}).click()
    await page.getByPlaceholder("Message").fill("Hello World")
    await page.getByRole("button",{name:'Show Message'}).click()
    await expect(page.getByText("Your Message : Hello World")).toBeVisible()
    //await page.pause()
})

