import { devices, expect } from "@playwright/test";

const config = ({
  testDir:'./tests',
  retries:1,
  workers:2,
  timeout:40*1000,  // timeout if a testcase has some issues and stops it will wait till this time
  expect:{
    timeout:40*1000  // timeout after failed assertion
  },
  reporter:'html',   //this will be the report after each test run for each test case
  projects:[
    {
    name:'safari',
  use: {
    browserName:'webkit',
    headless:true,
    screenshot:'on',
    trace:'on',
    video:'retain-on-failure'
  }
   },
   {
    name:'chrome',
  use: {
    browserName:'chromium',
    headless:false,
    screenshot:'off',
    trace:'on',
    video:'on',
    //viewport:{width:720,height:720},
   // ...devices['iPhone 11'],
    ignoreHttpsErrors:true, // ignores SSH errors
    Permissions:['geolocation']
  }
   }
  ]
})
module.exports = config


















