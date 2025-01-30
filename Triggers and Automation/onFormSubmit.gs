function onFormSubmit(e) {
const response = e.values;
// e.values returns an array of the submitted form data (includes timestamp if you set it up).
Logger.log("New form submission: " + JSON.stringify(response));
}