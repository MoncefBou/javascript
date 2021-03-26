// ROVER
var rover = {
    direction: "N",
    x: 0,
    y: 0
}
// GRID
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


// FONCTION TOURNER A GAUCHE ET A DROITE
function turnLeft(rover) {
    if( rover.direction == "N") {
        rover.direction = "W";
    } else if ( rover.direction == "E") {
        rover.direction = "N";
    } else if ( rover.direction == "S") {
        rover.direction = "E";
    } else {
        rover.direction = "S";
    }
}

function turnRight(rover) {
    if( rover.direction == "N") {
        rover.direction = "E";
    } else if ( rover.direction == "E") {
        rover.direction = "S";
    } else if ( rover.direction == "S") {
        rover.direction = "W";
    } else {
        rover.direction = "N";
    }
    console.log(rover.direction);
}

// FAIRE AVANCER LE ROVER 
function moveForward(rover) {
    if( rover.direction == "N") {
        grid[rover.y - 1][rover.x] = grid[rover.y][rover.x];
        grid[rover.y][rover.x] = " ";
        rover.y--;
        
    } else if ( rover.direction == "E") {
        grid[rover.y][rover.x + 1] = grid[rover.y][rover.x];
        grid[rover.y][rover.x] = " ";
        rover.x++;
        
    } else if ( rover.direction == "S") {
        grid[rover.y + 1][rover.x] = grid[rover.y][rover.x];
        grid[rover.y][rover.x] = " ";
        rover.y++;
        
    } else {
        grid[rover.y][rover.x - 1] = grid[rover.y][rover.x];
        grid[rover.y][rover.x] = " ";
        rover.x--;
    }
}


turnRight(rover);
// turnRight(rover);
moveForward(rover);

console.table(grid);