function onEdit(e) {
const range = e.range;
const newValue = e.value;
if (range.getColumn() === 2) { // Column B
if (Number(newValue) < 0) {
range.setValue(0);
SpreadsheetApp.getActiveSpreadsheet().toast("Negative values not allowed, reverted to 0.");
}
}
}