function getQuote() {
// Simulate random quotes
const quotes = [
"The journey of a thousand miles begins with a single step.",
"Life is really simple, but we insist on making it complicated.",
"In the middle of difficulty lies opportunity."
];
const randomIndex = Math.floor(Math.random() * quotes.length);
return quotes[randomIndex];
}

function showDynamicSidebar() {
const htmlOutput = HtmlService.createHtmlOutputFromFile("dynamicSidebar")
.setTitle("Random Quotes");
SpreadsheetApp.getUi().showSidebar(htmlOutput);
}