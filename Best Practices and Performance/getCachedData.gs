function getCachedData() {
const cache = CacheService.getScriptCache();
let data = cache.get("myAPIResponse");
if (!data) {
// Simulate fetching data
data = "Sample data from API at " + new Date();
cache.put("myAPIResponse", data, 300); // Cache for 300 seconds (5 minutes)
Logger.log("Fetched fresh data.");
} else {
Logger.log("Retrieved from cache.");
}
return data;
}