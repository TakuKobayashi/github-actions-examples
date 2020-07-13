import { loadSpreadsheetToObjects } from '../common/converter';

export function doGet(e: any): GoogleAppsScript.Content.TextOutput {
  const dataKeysColumnNumber: number = e.parameter.keys_column_row || 1;
  const dataStartRowNumber: number = e.parameter.start_row || 2;

  // e.parameterでURL QueryのObejctが取得できる
  const targetSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const resultObject = loadSpreadsheetToObjects(targetSpreadSheet, dataKeysColumnNumber, dataStartRowNumber);
  const jsonOut = ContentService.createTextOutput();
  //Mime TypeをJSONに設定
  jsonOut.setMimeType(ContentService.MimeType.JSON);
  //JSONテキストをセットする
  jsonOut.setContent(JSON.stringify(resultObject));
  return jsonOut;
}
