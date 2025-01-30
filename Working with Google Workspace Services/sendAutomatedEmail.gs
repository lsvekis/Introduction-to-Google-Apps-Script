function sendAutomatedEmail() {
const recipient = "recipient@example.com";
const subject = "Hello from Apps Script!";
const body = "This is an automated message. Have a great day!";

GmailApp.sendEmail(recipient, subject, body);

Logger.log("Email sent successfully.");
}