function searchDriveForBudget() {
const files = DriveApp.searchFiles("title contains 'Budget'");
while (files.hasNext()) {
const file = files.next();
Logger.log("Found file: " + file.getName());
}
}