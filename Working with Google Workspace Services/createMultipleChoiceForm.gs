function createMultipleChoiceForm() {
const form = FormApp.create("Feedback Form");
form.setDescription("Please provide your feedback.");

form.addMultipleChoiceItem()
.setTitle("Did you find this session helpful?")
.setChoiceValues(["Yes", "No", "Maybe"]);

Logger.log("Form created: " + form.getPublishedUrl());
}