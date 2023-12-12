import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Type in your URL:",
            name: "URL"
        }
    ])
    .then((ans) => {
        const url = ans.URL;
        const qr_svg =qr.image(url);
        const imageName = `./Image/${url.replace(/[^\w\s]/gi, '')}.png`
        
        qr_svg.pipe(fs.createWriteStream(imageName));

        fs.writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          }); 
    })
    .catch((err) => {

    })