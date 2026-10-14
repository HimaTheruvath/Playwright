import { test as baseTest } from "@playwright/test"
interface TestDataForOrder{
 username :string;
 password :string; 
 productName : string  
}
export const customTest =baseTest.extend<{testDataForOrder:TestDataForOrder}>({// customTest is a subclass of test
testDataForOrder:{ //custom fixture creation
 username :"standard_user",
 password : "secret_sauce",
 productName : "Sauce Labs Backpack"
}
})