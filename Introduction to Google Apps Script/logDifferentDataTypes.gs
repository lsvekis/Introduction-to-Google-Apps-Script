function logDifferentDataTypes() {
const message = "Hello, Logger!";
const amount = 42;
const user = { name: "Alice", role: "Editor" };
const items = ["Pen", "Notebook", "Eraser"];

Logger.log("String: " + message);
Logger.log("Number: " + amount);
Logger.log("Object: " + JSON.stringify(user));
Logger.log("Array: " + items);
}