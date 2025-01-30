function deleteDailyTrigger() {
const triggers = ScriptApp.getProjectTriggers();
for (const t of triggers) {
if (t.getHandlerFunction() === "dailyReport") {
ScriptApp.deleteTrigger(t);
Logger.log("Removed the dailyReport trigger.");
}
}
}