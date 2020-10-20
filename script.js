//Server status
let requestURL = 'https://api.mcsrvstat.us/2/mc.lmg.gg';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const serverData = request.response;
    console.log(serverData)
    var serverPlayerData = serverData["players"]
    var serverPlayerCount = serverPlayerData["online"]
    document.getElementById("player-number").innerHTML = serverPlayerCount + " Hráčů!"
  }