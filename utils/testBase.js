const base = require("@playwright/test")
exports.customTest =base.test.extend({// customTest is a subclass of test
testDataForOrder:{ //custom fixture creation
 username :"standard_user",
 password : "secret_sauce",
 productName : "Sauce Labs Backpack"
}
})