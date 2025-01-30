function doGet(e) {
const name = e.parameter.name || "Stranger";
return ContentService.createTextOutput(`Hello, ${name}!`);
}