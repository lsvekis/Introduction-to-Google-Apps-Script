function logTime() {
Logger.log("This is a time-driven trigger event at: " + new Date());
}

function createTimeTrigger() {
ScriptApp.newTrigger("logTime")
.timeBased()
.everyHours(1)
.create();
}