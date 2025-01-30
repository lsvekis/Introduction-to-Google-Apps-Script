function createAndFormatDoc() {
const doc = DocumentApp.create("My Automated Doc");
const body = doc.getBody();

const paragraph = body.appendParagraph("Welcome to my automated document!");
paragraph.setBold(true);

Logger.log("New Document created: " + doc.getUrl());
}