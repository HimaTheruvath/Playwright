class Dashboard{
    constructor(page){
        this.page = page
        this.products = page.locator(".inventory_item_name ")
        this.item = page.locator(".inventory_item")
        this.cart = page.locator("#shopping_cart_container")
    }
    async selectProduct(productName){
        await this.page.waitForLoadState('networkidle')
        await this.products.first().waitFor()
        console.log(await this.products.allTextContents())
        //const products = page.locator(".inventory_item_name ")
        //const productName = "Sauce Labs Backpack"
        const count = await this.products.count()
        console.log(count)
        for(let i=0;i<count;i++){
        if(await this.products.nth(i).textContent()===productName){
            await this.item.nth(i).locator("text=Add to cart").click()
            break
        }
    }
    }
    async moveToCart(){
        await this.cart.click()
    }

}
module.exports = Dashboard