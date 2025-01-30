function removeAllTriggers() {
const triggers = ScriptApp.getProjectTriggers();
triggers.forEach(trigger => {
ScriptApp.deleteTrigger(trigger);
Logger.log("Removed trigger for function: " + trigger.getHandlerFunction());
});
}