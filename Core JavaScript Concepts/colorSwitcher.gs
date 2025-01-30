function colorSwitcher() {
let colorChoice = "green";

switch (colorChoice) {
case "red":
Logger.log("You chose red!");
break;
case "green":
Logger.log("You chose green!");
break;
case "blue":
Logger.log("You chose blue!");
break;
default:
Logger.log("Unknown color choice.");
}
}