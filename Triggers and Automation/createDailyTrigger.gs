function createDailyTrigger() {
ScriptApp.newTrigger("dailyReport")
.timeBased()
.everyDays(1)
.atHour(6) // approximate start time between 6am-7am
.create();
}

function dailyReport() {
Logger.log("Daily report process triggered!");
// Add code here to compile or email your daily report...
}