function createFolderAndMoveFile() {
const folder = DriveApp.createFolder("My New Folder");

// Replace with your existing file ID
const file = DriveApp.getFileById("YOUR_FILE_ID");
folder.addFile(file);

Logger.log("File moved to folder: " + folder.getName());
}