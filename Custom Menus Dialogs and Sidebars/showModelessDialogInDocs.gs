function showModelessDialogInDocs() {
const htmlOutput = HtmlService.createHtmlOutput("<p>I'm modeless!</p>")
.setWidth(250)
.setHeight(100);

DocumentApp.getUi().showModelessDialog(htmlOutput, "Modeless Demo");
}