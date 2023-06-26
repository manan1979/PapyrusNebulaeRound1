# Folder Extractor

This program allows you to extract data from all pdf files in a folder and generate a CSV file of 100 pdf provided in round 1 of PapyrusNebulae hackathon.


## Usage

How to run this program

# 1. Run `folderExtract.js` directly

1. Open a terminal or command prompt.
2. Navigate to the project directory.
3. Run the following command:

    ```shell
   node folderExtract.js



## Configuration

Before running the program, you may need to modify the *pdfservices-api-credentials.json* and *private.key* file and update the necessary values according to your requirements.



## File Placement

To use this program, please ensure that you place your files in the designated "input" folder within the project directory. The program will process the files located in this folder and generate the CSV output accordingly.

## Data Processing and CSV Creation

The data processing and CSV creation logic is implemented in the `dataProcessingAndCsvCreation.js` file. This file handles the extraction of data from the input files, performs any necessary processing, and generates the final CSV output file.

If you need to customize the data processing or CSV generation logic, you can modify the code in the `dataProcessingAndCsvCreation.js` file according to your requirements.


