function logFormResponses() {
const formId = "YOUR_FORM_ID";
const form = FormApp.openById(formId);
const formResponses = form.getResponses();

formResponses.forEach(response => {
response.getItemResponses().forEach(itemResponse => {
Logger.log("Question: " + itemResponse.getItem().getTitle());
Logger.log("Answer: " + itemResponse.getResponse());
});
});
}