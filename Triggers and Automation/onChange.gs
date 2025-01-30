function onChange(e) {
const changeType = e.changeType;
Logger.log("A change occurred in the spreadsheet: " + changeType);

// Possible changeTypes: INSERT_ROW, REMOVE_ROW, INSERT_COLUMN, REMOVE_COLUMN,
// INSERT_GRID, REMOVE_GRID, FORMAT, OTHER, etc.
if (changeType === "INSERT_GRID") {
Logger.log("A new sheet was added!");
}
}