function showSidebar() {
const htmlOutput = HtmlService.createTemplateFromFile("sidebar").evaluate()
.setTitle("My Custom Sidebar");
SpreadsheetApp.getUi().showSidebar(htmlOutput);
}