const { expect } = require("@playwright/test")

class Summary{
   constructor(page){  //page factory format

    this.page = page
    this.item = page.locator(".inventory_item_name")
    this.total = page.locator(".summary_subtotal_label")
    this.finishBtn = page.locator("#finish")
   } 
   async validateSummary(){
    await this.item.waitFor()
    //await expect(this.total).toHaveText("Item total: $29.99")
    console.log(await this.total.textContent())
   }
   async clickFinish(){
    await this.finishBtn.click()
   }

}
module.exports = Summary