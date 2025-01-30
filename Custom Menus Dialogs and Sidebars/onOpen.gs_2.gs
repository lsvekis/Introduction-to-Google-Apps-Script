function onOpen() {
const ui = DocumentApp.getUi();
ui.createMenu("Doc Tools")
.addItem("Say Hello", "helloDoc")
.addToUi();
}

function helloDoc() {
DocumentApp.getActiveDocument().getBody().appendParagraph("Hello from custom menu!");
}