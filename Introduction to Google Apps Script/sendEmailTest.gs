function sendEmailTest() {
var recipient = "example@example.com";
var subject = "Automated Email";
var body = "Hello! This is an automated message from Apps Script.";
GmailApp.sendEmail(recipient, subject, body);
}