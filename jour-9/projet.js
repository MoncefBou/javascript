var prompt = require("prompt");

// ROVER ET GRID
var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
}

var grid = [
    [rover.direction, " ", " ", " ", " ", " ", " ", " ", " ", " "],
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

console.table(grid);

// POUR TOURNER A GAUCHE OU A DROITE
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

// POUR AVANCER OU RECULER
function moveForward(rover) {

    if ((rover.direction == "N" && rover.y == 0) || (rover.direction == "S" && rover.y == 9) || (rover.direction == "W" && rover.x == 0) || (rover.direction == "E" && rover.x == 9)) {
        console.log("error, On va sortir de la grille attention !! Changez de direction svp");

    } else {

        if (rover.direction == "N") {
            grid[rover.y - 1][rover.x] = rover.direction;
            grid[rover.y][rover.x] = "-";
            rover.y--;
        } else if (rover.direction == "E") {
            grid[rover.y][rover.x + 1] = rover.direction;
            grid[rover.y][rover.x] = "-";
            rover.x++;
        } else if (rover.direction == "S") {
            grid[rover.y + 1][rover.x] = rover.direction;
            grid[rover.y][rover.x] = "-";
            rover.y++;
        } else {
            grid[rover.y][rover.x - 1] = rover.direction;
            grid[rover.y][rover.x] = "-";
            rover.x--;
        }
    }
}

function moveBackward(rover) {

    if ((rover.direction == "N" && rover.y == 9) || (rover.direction == "S" && rover.y == 0) || (rover.direction == "W" && rover.x == 9) || (rover.direction == "E" && rover.x == 0)) {
        console.log("error, On va sortir de la grille attention !! Changez de direction svp");

    } else {

        if (rover.direction == "N") {
            grid[rover.y + 1][rover.x] = rover.direction;
            grid[rover.y][rover.x] = "-";
            rover.y++;
        } else if (rover.direction == "E") {
            grid[rover.y][rover.x - 1] = rover.direction;
            grid[rover.y][rover.x] = "-";
            rover.x--;
        } else if (rover.direction == "S") {
            grid[rover.y - 1][rover.x] = rover.direction;
            grid[rover.y][rover.x] = "-";
            rover.y--;
        } else {
            grid[rover.y][rover.x + 1] = rover.direction;
            grid[rover.y][rover.x] = "-";
            rover.x++;
        }
    }
}

// MANETTE DE CONTROLE ET PROMPT
function pilotRover(str) {

    for (var i = 0; i < str.length; i++) {

        if (str.charAt(i).toLowerCase() === "l") {
            turnLeft(rover);
            grid[rover.y][rover.x]= rover.direction;
        } else if (str.charAt(i).toLowerCase() === "r") {
            turnRight(rover);
            grid[rover.y][rover.x]= rover.direction;
        } else if (str.charAt(i).toLowerCase() === "f") {
            rover.travelLog.push("x: " + rover.x + " y: " + rover.y);
            moveForward(rover);
        } else if (str.charAt(i).toLowerCase() === "b") {
            rover.travelLog.push("x: " + rover.x + " y: " + rover.y);
            moveBackward(rover);
        } else {
            return console.log("error, Houston we have a problem.", str.charAt(i), "is not a letter I understand");
        }


    }
}

function onErr(err) {
    console.log(err);
    return;
}

function displayPrompt() {

    prompt.get({
        name: "q", description: "Faite bougez le rover, 'r' à droite, 'l' à gauche et 'f' avancer, ", validator: /[a-z]+/g,
        warning: "Que des lettres svp !"
    }, function (err, res) {
        if (err) {
            return onErr(err);
        }

        pilotRover(res.q);
        console.table(grid);
        displayPrompt()

    });
}

displayPrompt();