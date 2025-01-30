function logScriptScopes() {
const manifest = ScriptApp.getManifest();
// .getManifest() returns an object with manifest data, including oauthScopes
Logger.log("Current OAuth Scopes:");
if (manifest.oauthScopes) {
manifest.oauthScopes.forEach(scope => Logger.log(scope));
} else {
Logger.log("No explicit scopes found.");
}
}