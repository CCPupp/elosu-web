var getData = function() {
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "elocalc/players.json");

    myRequest.onload = function() {
        var myData = JSON.parse(myRequest.responseText);
        var strResults = "<ol>";
        var ranking = [];
        //display the results on the web page
        myData.sort(function(a, b) {
            return b.elo.localeCompare(a.elo);
        });
        for (i = 0; i < myData.length; i++) {
            strResults +=
                "<li><h3>" + myData[i].username + " : " + myData[i].elo + ".</h3></li>";
        }
        strResults += "</ol>";
        document.getElementById("info").innerHTML = strResults;
        console.log(myData);
    };
    myRequest.send();
};

var submit = function() {
    var fs = require("fs");
    var myData = JSON.parse(fs.readFileSync("elocalc/players.json").toString());
    myData.push({
        username: document.getElementById("username").value,
        id: document.getElementById("id").value,
        elo: 1200
    });
    myData = JSON.stringify(myData);
    fs.writeFile("elocalc/players.json", json, "utf8", callback);
    console.log(myData);
};

function search() {
    console.log("got here");
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "elocalc/players.json");

    myRequest.onload = function() {
        var myData = JSON.parse(myRequest.responseText);
        var ranking = [];

        //display the results on the web page
        myData.sort(function(a, b) {
            return b.elo.localeCompare(a.elo);
        });
        for (i = 0; i < myData.length; i++) {
            if (document.getElementById("username").value.toLowerCase() == myData[i].username.toLowerCase()) {
                var strResults = "" + myData[i].username + " : " + myData[i].elo + ".";
            }
        }
        if (strResults != undefined) {
            document.getElementById("playersearch").innerHTML = strResults;
        } else {
            document.getElementById("playersearch").innerHTML = "Player Not Found";
        }
    };
    myRequest.send();
}

function calculate() {

}

window.onload = main.getDataNew();