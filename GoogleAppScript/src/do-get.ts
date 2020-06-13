export function doGet(e: any): GoogleAppsScript.Content.TextOutput {
  const dataKeysColumnIndex: number = (e.parameter.keys_column_row || 1) - 1;
  const dataStartRowIndex: number = (e.parameter.start_row || 2) - 1;

  const targetSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const resultObject: { [s: string]: any } = {};
  for (const sheet of targetSpreadSheet.getSheets()) {
    const resultJsonObjects = [];
    const dataRange = sheet.getDataRange();
    const data = dataRange.getValues();
    for (let row = dataStartRowIndex; row < data.length; ++row) {
      const sheetData: { [s: string]: any } = {};
      const keys = data[0];
      for (let column = dataKeysColumnIndex; column < keys.length; ++column) {
        sheetData[keys[column]] = data[row][column];
      }
      resultJsonObjects.push(sheetData);
    }
    resultObject[sheet.getSheetName()] = resultJsonObjects;
  }
  // response to JSON String
  const jsonOut = ContentService.createTextOutput();
  jsonOut.setMimeType(ContentService.MimeType.JSON);
  jsonOut.setContent(JSON.stringify(resultObject));
  return jsonOut;
}
