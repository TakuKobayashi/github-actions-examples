import { getKeyNumberPairs, updateHeaderValues } from '../common/sheet-data';

export function doPost(e: any): GoogleAppsScript.Content.TextOutput {
  const dataKeysColumnRow: number = e.parameter.keys_column_row || 1;
  const dataStartRowNumber: number = e.parameter.start_row || 2;
  const primaryKeyName = e.parameter.primary_key;

  const data = JSON.parse(e.postData.getDataAsString());
  const sheetNames = Object.keys(data);

  // e.parameterでURL QueryのObejctが取得できる
  const targetSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = targetSpreadSheet.getSheets();
  const newSheetNames = sheetNames.filter((sheetName) => sheets.every((sheet) => sheetName != sheet.getName()));
  for (const sheetName of newSheetNames) {
    const newSheet = targetSpreadSheet.insertSheet(sheetName);
    sheets.push(newSheet);
  }
  // Sheet名のdataを取り出す
  for (const sheetName of sheetNames) {
    const sheet = sheets.find((sheet) => sheet.getSheetName() === sheetName);
    if (!sheet) {
      continue;
    }
    // Sheet内のJSONData
    const sheetData = data[sheetName];
    const updateTargetRowsValuesList: { [n: number]: any }[] = [];
    if (sheet.getLastColumn() <= 0){
      const dataHeaderPairs: { [s: string]: any } = {}
      for (let i = 0; i < sheetData.length; ++i) {
        const rowData = sheetData[i];
        const rowKeys = Object.keys(rowData);
        for (let j = 0; j < rowKeys.length; ++j){
          const rowKey = rowKeys[j];
          if(!dataHeaderPairs[rowKey]){
            dataHeaderPairs[rowKey] = j + 1;
          }
        }
      }
      updateHeaderValues(sheet, dataHeaderPairs, dataKeysColumnRow);
    }
    const headerPairs = getKeyNumberPairs(sheet, dataKeysColumnRow);
    const headerValues = Object.values(headerPairs);
    let nextKeyNumber = headerValues.length > 0 ? Math.max(...headerValues) : 0;
    let maxColumnNumber = 1;
    // 1行分のObject
    for (let i = 0; i < sheetData.length; ++i) {
      const rowData = sheetData[i];
      const rowKeys = Object.keys(rowData);
      const updateTargetRowsValues: { [n: number]: any } = {};
      for (const rowKey of rowKeys) {
        // headerにないものKeyがきたらHeaderに追加する
        if (!headerPairs[rowKey]) {
          nextKeyNumber = nextKeyNumber + 1;
          headerPairs[rowKey] = nextKeyNumber;
        }
        // データの更新
        const headerColumnNumber = headerPairs[rowKey];
        updateTargetRowsValues[headerColumnNumber] = rowData[rowKey];
        if (maxColumnNumber < headerColumnNumber) {
          maxColumnNumber = headerColumnNumber;
        }
      }
      updateTargetRowsValuesList.push(updateTargetRowsValues);
    }
    // 変更すべきデータの行数の情報を取得
    const targetRowsRange = sheet.getRange(dataStartRowNumber, 1, sheetData.length, maxColumnNumber);
    const targetRowsValues = targetRowsRange.getValues();
    for (let i = 0; i < updateTargetRowsValuesList.length; ++i) {
      const updateColumnNumbers = Object.keys(updateTargetRowsValuesList[i]);
      let rowNumber;
      if (primaryKeyName) {
        rowNumber = targetRowsValues.findIndex(
          (rowValues) => rowValues[headerPairs[primaryKeyName] - 1] == updateTargetRowsValuesList[i][headerPairs[primaryKeyName]],
        );
      }
      if (!rowNumber || rowNumber < 0) {
        rowNumber = i;
      }
      for (const columnNumber of updateColumnNumbers) {
        targetRowsValues[rowNumber][columnNumber - 1] = updateTargetRowsValuesList[i][columnNumber];
      }
    }
    targetRowsRange.setValues(targetRowsValues);
  }
  const jsonOut = ContentService.createTextOutput();
  //Mime TypeをJSONに設定
  jsonOut.setMimeType(ContentService.MimeType.JSON);
  //JSONテキストをセットする
  jsonOut.setContent(JSON.stringify(data));
  return jsonOut;
}
