function installableFormTrigger() {
ScriptApp.newTrigger("notifyOnFormSubmit")
.forForm("YOUR_FORM_ID") // or .forSpreadsheet(SpreadsheetApp.openById("..."))
.onFormSubmit()
.create();
}

function notifyOnFormSubmit(e) {
const email = "team@example.com";
const subject = "New Form Response!";
const response = e.response.getItemResponses()
.map(item => item.getResponse())
.join(", ");
GmailApp.sendEmail(email, subject, "A new response was received: " + response);
Logger.log("Notified team of new form submission.");
}