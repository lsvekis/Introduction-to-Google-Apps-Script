function showUserSidebar() {
const template = HtmlService.createTemplateFromFile("userdata");
template.name = "Alice Johnson"; // Passing data
const htmlOutput = template.evaluate().setTitle("User Info");
SpreadsheetApp.getUi().showSidebar(htmlOutput);
}