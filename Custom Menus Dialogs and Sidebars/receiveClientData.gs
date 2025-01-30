function receiveClientData(message) {
Logger.log("Received from client: " + message);
}

function showClientServerSidebar() {
const htmlOutput = HtmlService.createHtmlOutputFromFile("clientToServer")
.setTitle("Client-Server Test");
SpreadsheetApp.getUi().showSidebar(htmlOutput);
}