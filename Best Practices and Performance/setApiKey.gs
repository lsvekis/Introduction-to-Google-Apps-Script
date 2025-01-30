function setApiKey() {
const apiKey = "YOUR_SECRET_API_KEY";
PropertiesService.getScriptProperties().setProperty("MY_API_KEY", apiKey);
}

function getApiKey() {
const storedKey = PropertiesService.getScriptProperties().getProperty("MY_API_KEY");
Logger.log("Retrieved API Key: " + (storedKey ? "***hidden***" : "No key found"));
return storedKey;
}