export function loadSpreadsheetToObjects(
  targetSpreadSheet: GoogleAppsScript.Spreadsheet.Spreadsheet,
  dataKeysColumnNumber: number = 1,
  dataStartRowNumber: number = 2,
): { [s: string]: any } {
  const resultObject: { [s: string]: any } = {};
  for (const sheet of targetSpreadSheet.getSheets()) {
    const resultJsonObjects = [];
    const dataRange = sheet.getDataRange();
    const data = dataRange.getValues();
    for (let row = dataStartRowNumber - 1; row < data.length; ++row) {
      const sheetData: { [s: string]: any } = {};
      const keys = data[0];
      for (let column = dataKeysColumnNumber - 1; column < keys.length; ++column) {
        sheetData[keys[column]] = data[row][column];
      }
      resultJsonObjects.push(sheetData);
    }
    resultObject[sheet.getSheetName()] = resultJsonObjects;
  }
  return resultObject;
}
