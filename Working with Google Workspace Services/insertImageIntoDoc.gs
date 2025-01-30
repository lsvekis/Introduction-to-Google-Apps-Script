function insertImageIntoDoc() {
const imageUrl = "https://via.placeholder.com/150"; // Example placeholder
const doc = DocumentApp.create("Image Demo");
const blob = UrlFetchApp.fetch(imageUrl).getBlob();

const body = doc.getBody();
body.appendImage(blob);

Logger.log("Image inserted. Doc URL: " + doc.getUrl());
}