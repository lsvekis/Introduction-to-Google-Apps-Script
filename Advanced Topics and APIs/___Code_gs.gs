// Code.gs
function onOpen(e) {
const ui = SpreadsheetApp.getUi();
ui.createMenu("My Add-on")
.addItem("Show Toast", "showToast")
.addToUi();
}

function showToast() {
SpreadsheetApp.getActiveSpreadsheet().toast("Hello from My Add-on!");
}

// Additional metadata in appsscript.json is needed for publishing as an add-on