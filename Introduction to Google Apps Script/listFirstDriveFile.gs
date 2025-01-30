function listFirstDriveFile() {
const files = DriveApp.getFiles();
if (files.hasNext()) {
const file = files.next();
Logger.log("First file found: " + file.getName());
} else {
Logger.log("No files found in Drive.");
}
}