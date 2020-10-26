var date = new Date();
var unixTime = date.getTime();
//Server status
let requestURL = 'https://api.mcsrvstat.us/2/play.engineerium.eu';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const serverData = request.response;
    if(serverData["online"]) {
        var serverPlayerData = serverData["players"]
        var serverPlayerCount = serverPlayerData["online"]
        if(serverPlayerCount == 0) {
            var playerCountWord = " Hráčů"
        } else if(serverPlayerCount == 1) {
            var playerCountWord = " Hráč";
        } else if(serverPlayerCount < 5) {
            var playerCountWord = " Hráči";
        } else {
            var playerCountWord = " Hráčů";
        }
        var serverDebugData = serverData["debug"]
        var serverCacheTime = serverDebugData["cachetime"]
        //console.log(serverDebugData + " " + serverCacheTime)
        if(serverCacheTime == 0) {
            var cacheTimeWord = "!";
        } else {
            var cacheTimeWord = ".";
        }
        document.getElementById("player-number").innerHTML = serverPlayerCount + playerCountWord + cacheTimeWord
        /* ----------------------------------------------------------- */
        var serverMOTDs = serverData["motd"]
        var serverMOTDClean = serverMOTDs["clean"]
        console.log("%c|-------=≡ Online player list ≡=-------|", "color: #0088aa")
        if(serverPlayerCount > 0) {
            var serverPlayerList = serverPlayerData["list"]
            for (var i = 0; i < serverPlayerList.length; i++) {
                var ii = i + 1
                console.log(ii + ": " + serverPlayerList[i])
            }
        } else {
            console.log("%c0: Noone is online", "color: #ffffff")
        }
        console.log("%c|--------------=≡ MOTD ≡=--------------|", "color: #0088aa")
        console.log(serverMOTDClean[0])
        console.log(serverMOTDClean[1])
        console.log("%c|---------=≡ All other info ≡=---------|", "color: #0088aa")
        console.log(serverData)
        console.log("%c|-------=≡ Time=" + unixTime + " ≡=-------|", "color: #0088aa")
    } else {
        document.getElementById("play-number-heading").innerHTML = ""
        document.getElementById("player-number").innerHTML = "Vypadá to že server je offline.<br>Omlouváme se za způsobené nepříjemnosti."
        console.log("%c|--------------=≡ Info ≡=--------------|", "color: #0088aa")
        console.log("Server je offline")
        console.log("Máme pouze minimum dat:")
        console.log(serverData)
        console.log("%c|-------=≡ Time=" + unixTime + " ≡=-------|", "color: #0088aa")
    }
} //End of Server status