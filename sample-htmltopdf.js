const htmlPdf = require("html-pdf");
const fs = require('fs');

function GeneratePdf(typeOfFile, filePath, fileName, toBeGenFileName) {
    try {
        let HTMLFilePath = `.${filePath}${fileName}`;
        

        if(!fs.existsSync(HTMLFilePath)) {
            console.log("File Doesn't Exists.");
        }

        typeOfFile === "PNG" ?
            toBeGenFileName += ".png" : toBeGenFileName += ".pdf"

        const htmlContent = fs.readFileSync(HTMLFilePath, 'utf8');
        const htmlToPdfOptions = {
            "type" : typeOfFile,
            "height" : "1650px",
            "width" : "1850px",
            "page-size":"A2",
            "margin":"40px",
            "no-outline":"None",
            "layout":"landscape",
            "scale":"100px",
            "renderDelay" : 2000
        };

        htmlPdf.create(htmlContent, htmlToPdfOptions)
        .toFile(toBeGenFileName, function(err, result) {
            if(err) return console.log(result);
        });
    } catch(error) {
        console.log("error While converting html-to-PDF", error);
    }
}

GeneratePdf("PDF", "/", "index.html", "index-sample3");