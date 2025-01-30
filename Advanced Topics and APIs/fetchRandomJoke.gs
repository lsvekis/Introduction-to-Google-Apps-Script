function fetchRandomJoke() {
const url = "https://official-joke-api.appspot.com/random_joke";
const response = UrlFetchApp.fetch(url);

// Parse JSON
const data = JSON.parse(response.getContentText());

Logger.log(`Setup: ${data.setup}`);
Logger.log(`Punchline: ${data.punchline}`);
}