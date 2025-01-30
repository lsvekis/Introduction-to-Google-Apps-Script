function doGet() {
return HtmlService.createTemplateFromFile("index").evaluate();
}

// For testing in the editor only
function showHtml() {
const template = HtmlService.createTemplateFromFile("index");
const html = template.evaluate();
Logger.log("Preview URL: " + html.getContent());
// Or you can deploy as a web app to see it live
}