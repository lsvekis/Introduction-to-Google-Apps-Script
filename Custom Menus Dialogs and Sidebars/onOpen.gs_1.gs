function onOpen() {
const ui = SpreadsheetApp.getUi();
ui.createMenu("Custom Menu")
.addSubMenu(
ui.createMenu("Actions")
.addItem("Action 1", "actionOne")
.addItem("Action 2", "actionTwo")
)
.addToUi();
}

function actionOne() {
SpreadsheetApp.getActiveSpreadsheet().toast("Action One executed!");
}

function actionTwo() {
SpreadsheetApp.getActiveSpreadsheet().toast("Action Two executed!");
}