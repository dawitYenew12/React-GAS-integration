// Code.gs
function getSheetData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getRange(1, 1, sheet.getLastRow(), 1);
  var data = dataRange.getValues();
  Logger.log(data);
  return data.flat();
}

function doGet() {
  const template = HtmlService.createTemplateFromFile('index');
  return template.evaluate()
    .setTitle('React App with Google Sheets')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// function getSheetDataAsJson() {
//   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//   var lastRow = sheet.getLastRow();
//   var lastColumn = sheet.getLastColumn();
//   var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
//   var data = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
  
//   var jsonData = data.map(function(row) {
//     var obj = {};
//     headers.forEach(function(header, index) {
//       obj[header] = row[index];
//     });
//     return obj;
//   });
  
//   return ContentService.createTextOutput(JSON.stringify(jsonData))
//     .setMimeType(ContentService.MimeType.JSON);
// }
