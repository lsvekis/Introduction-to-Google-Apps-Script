function fetchProtectedData() {
const apiKey = "YOUR_API_KEY_HERE";
const endpoint = "https://api.example.com/protected";

const params = {
headers: {
"Authorization": "Bearer " + apiKey
},
muteHttpExceptions: true // helps debug if there's an error code
};

const response = UrlFetchApp.fetch(endpoint, params);
if (response.getResponseCode() === 200) {
const data = JSON.parse(response.getContentText());
Logger.log(data);
} else {
Logger.log("Error fetching data: " + response.getResponseCode());
}
}