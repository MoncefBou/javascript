function countEach (myString) {
    
    var countX = 0;
    var countO = 0;
    
    for ( var i = 0; i < myString.length; i++ ) {
        if ( myString.charAt(i) === "x") {
            countX++;
        } else {
            countO++;
        };
    };

    if ( countX === countO) {
        console.log("true");
    } else {
        console.log("false");
    }
};

countEach("xxxoo");

var myString = "abcdefgh";
console.log(myString.charAt(4));






for ( var i = 0; i < 5; i++ ) {

};