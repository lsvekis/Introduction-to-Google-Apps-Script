function secureDataExample() {
// We only use Drive's read scope, not the Gmail service, to reduce unneeded permissions.
const fileCount = countUserDriveFiles();
Logger.log("You have " + fileCount + " files in your Drive.");
}

function countUserDriveFiles() {
let count = 0;
const files = DriveApp.getFiles();
while (files.hasNext()) {
files.next();
count++;
}
return count;
}