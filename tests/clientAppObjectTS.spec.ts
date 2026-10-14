import test, { expect } from "@playwright/test";
import { POManager } from "../pagesTS/POManager";
import { customTest } from "../utilsTS/testbase";

//const { expect, test } = require("@playwright/test");
/*const Login = require("../pages/login");
const Dashboard = require("../pages/Dashboard");
const Cart = require("../pages/Cart");
const ShippingDetails = require("../pages/ShippingDetails");
const Summary = require("../pages/Summary");
const POManager = require("../pages/POManager");*/
//const { customTest } = require("../utils/testBase");
const testData = JSON.parse(JSON.stringify(require("../utils/placeOrderTestData.json")))

for(const data of testData){
test(`Automation of Shopping cart Application in Page Object Model for ${data.productName}`,async({page})=>{
   // const username ="standard_user"
    //const password = "secret_sauce"
    //const productName = "Sauce Labs Backpack"
    const pomanager = new POManager(page)
    //const login = new Login(page)
    const login = pomanager.getLogin()
    await login.goto()
    await login.validLogin(data.username,data.password)

    //const dashboard = new Dashboard(page)
    const dashboard = pomanager.getDashboard()
    await dashboard.selectProduct(data.productName)
    await dashboard.moveToCart()

    //const cart = new Cart(page)
    const cart = pomanager.getCart()
    await cart.validateProduct()
    await cart.clickCheckout()

    //const shipping = new ShippingDetails(page)
    const shipping = pomanager.getShippingDetails()
    await shipping.enterUserDetails("Hima","Thomas","N2A 0H3")
    await shipping.clickContinue()

    //const summary = new Summary(page)
    const summary = pomanager.getSummary()
    await summary.validateSummary()
    await summary.clickFinish()

    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!")
    //await page.pause()
})
}
customTest('Customized test case',async({page,testDataForOrder})=>{
 const pomanager = new POManager(page)
    //const login = new Login(page)
    const login = pomanager.getLogin()
    await login.goto()
    await login.validLogin(testDataForOrder.username,testDataForOrder.password)

    //const dashboard = new Dashboard(page)
    const dashboard = pomanager.getDashboard()
    await dashboard.selectProduct(testDataForOrder.productName)
    await dashboard.moveToCart()

    //const cart = new Cart(page)
    const cart = pomanager.getCart()
    await cart.validateProduct()
    await cart.clickCheckout()   
}
)