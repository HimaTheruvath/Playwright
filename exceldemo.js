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
writeExcelfile("C:/Users/bonyt/Downloads/Obsqura Testing.xlsx","Airi Satou","New York")
