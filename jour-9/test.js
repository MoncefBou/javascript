var prompt = require("prompt");

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
}

var grid = [
    [rover, " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

function turnLeft(rover) {
    if (rover.direction == "N") {
        rover.direction = "W";
    }
    else if (rover.direction == "W") {
        rover.direction = "S";
    }
    else if (rover.direction == "S") {
        rover.direction = "E";
    }
    else {
        rover.direction = "N";
    }
}

function turnRight(rover) {
    if (rover.direction == "N") {
        rover.direction = "E";
    }
    else if (rover.direction == "W") {
        rover.direction = "N";
    }
    else if (rover.direction == "S") {
        rover.direction = "W";
    }
    else {
        rover.direction = "S";
    }
}

function moveForward(rover) {
    if (rover.direction == "N") {
        rover.y--;
    } else if (rover.direction == "E") {
        rover.x++;
    } else if (rover.direction == "S") {
        rover.y++;
    } else {
        rover.x--;
    }
}

function pilotRover(str) {

    for (var i = 0; i < str.length; i++) {

        if (str.charAt(i) === "l") {
            turnLeft(rover);
        } else if (str.charAt(i) === "r") {
            turnRight(rover);
        } else if (str.charAt(i) === "f") {
            rover.travelLog.push("x: " + rover.x + " y: " + rover.y);
            moveForward(rover);
        } else {
            console.log("error");
        }


    }
}

// pilotRover("rrfflff");
// console.log(rover);

function onErr(err) {
    console.log(err);
    return;
}

prompt.get({
    name: "q", description: "Faite bougez le rover, 'r' à droite, 'l' à gauche et 'f' avancer, ", validator: /[a-z]+/g,
    warning: "Que des lettres svp !"}, function (err, res) { 
    if (err) {
        return onErr(err);
    }

        pilotRover(res.q);
        console.log(rover);
});