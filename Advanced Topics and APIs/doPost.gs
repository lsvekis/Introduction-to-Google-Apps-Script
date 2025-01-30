function doPost(e) {
const firstName = e.parameter.firstName || "No first name";
const lastName = e.parameter.lastName || "No last name";

Logger.log(`Received form submission: ${firstName} ${lastName}`);

return ContentService.createTextOutput(
`Thank you, ${firstName} ${lastName}, for your submission!`
);
}