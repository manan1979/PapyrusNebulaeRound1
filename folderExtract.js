import fs from 'fs';
import path from 'path';
import extractFile from './pdfExtract.js';
import { fileURLToPath } from 'url';
import { csvCreation } from './dataProcessingAndCsvCreation.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//keep your files in this folder giving sequenctional numeric index at the end of file name 

const srcFolder = 'inputFiles';

const fullPath = path.join(__dirname, srcFolder);
const files = fs.readdirSync(fullPath);
let filesarr = new Array(files.length);

const extract = async (file) => {
  await extractFile(file, srcFolder);
}

try {
  files.forEach((file) => {
    if (path.parse(file).ext == '.pdf') {
      
      filesarr[path.parse(file).name.slice(6)] = path.parse(file).name;
    }
  });
} catch (error) {
  console.log(error);
}

const extractPromises = filesarr.map((ele) => extract(ele));//Extracting all files present in the folder
//Beginning file data extraction and CSV creation process
Promise.all(extractPromises)
  .then(async () => {
    let flag = 0;
    const csvCreationPromises = filesarr.map((ele) => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            await csvCreation(`./output/ExtractTextTableWithTableStructure${ele}.zip`, flag);
            resolve();
          } catch (error) {
            reject(error);
          }
          flag++;
        }, 3000);
      });
    });
    await Promise.all(csvCreationPromises);
    console.log('All extraction finished. Your CSV is ready');
    console.log(flag);
  })
  .catch((error) => {
    console.log(error);
  });


