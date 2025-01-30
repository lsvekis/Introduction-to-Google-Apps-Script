function createWeeklyEmailTrigger() {
ScriptApp.newTrigger("sendWeeklySummary")
.timeBased()
.everyWeeks(1)
.create();
}

function sendWeeklySummary() {
const recipient = "recipient@example.com";
const subject = "Weekly Summary";
const body = "Here is your automated weekly summary...";

GmailApp.sendEmail(recipient, subject, body);
Logger.log("Weekly summary email sent to " + recipient);
}