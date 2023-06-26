const addRow = async (Row) => {
    csvWriter
      .writeRecords([Row])
      .then(() => {
        
      })
      .catch((error) => {
        console.error("Error adding data row to CSV file:", error);
      });
  }