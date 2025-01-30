function declareAndLogVariables() {
var oldStyle = "I am declared with var";
let modernStyle = "I am declared with let";
const constantValue = "I am declared with const";

Logger.log(oldStyle);
Logger.log(modernStyle);
Logger.log(constantValue);
}