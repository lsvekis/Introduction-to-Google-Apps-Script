function getDriveFileCount() {
// This function can only be run from the script editor
// because DriveApp requires authorization.
// If used directly in a sheet cell, it will return an error.
return DriveApp.getFiles().hasNext() ? "At least 1 file" : "No files";
}