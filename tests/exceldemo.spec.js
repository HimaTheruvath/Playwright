/*const { expect,test } = require("@playwright/test")

test('Excel Demo download and upload', async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    await page.getByRole("link",{name:'Table'}).click()
    await page.getByRole("link",{name:'Table Data Download'}).click()
    await page.getByRole("button",{name:'Excel'}).click()
    const downloadPromise = page.waitForEvent("download")
    await page.getByRole("button", { name: "Excel" }).click()
    const download = await downloadPromise
    // console.log(download.suggestedFilename())
    //await download.saveAs("test-results/Obsqura Testing.xlsx")
    
   const Exceljs = require('exceljs')
    async function writeExcelfile(filepath,searchvalue,changevalue) {
        const workbook = new Exceljs.Workbook()
        await workbook.xlsx.readFile(filepath)
        const worksheet = workbook.getWorksheet('Sheet1')
        const output = await readExcelfile(worksheet,searchvalue) 
        const cell = worksheet.getCell(output.row,output.col+2)
        cell.value = changevalue// it did not save the new name, just added 
        await workbook.xlsx.writeFile(filepath)//this will save the new edit
    }
    async function readExcelfile(worksheet,searchvalue){
        let output ={row:-1,col:-1}
        worksheet.eachRow((row,rownumber)=>{
            row.eachCell((cell,colnumber)=>{
               // console.log(cell.value)
               if(cell.value===searchvalue){
                output.row = rownumber
                output.col = colnumber
               }
            })
        })
        return output
    }
    await writeExcelfile("C:/Users/bonyt/Downloads/Obsqura Testing.xlsx","Airi Satou","New York")
    
    await page.pause()
})*/