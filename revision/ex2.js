// function countEach (myString) {

//     var countX = 0;
//     var countO = 0;

//     for ( var i = 0; i < myString.length; i++ ) {
//         if ( myString.charAt(i) === "x") {
//             countX++;
//         } else {
//             countO++;
//         };
//     };

//     if ( countX === countO) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// };

// countEach("xxxooo");

// Bonus 3

function countEach(myString) {

    var countX = 0;
    var countO = 0;
    var numberOfUpper = 0;
    var error = 0;


    for (var i = 0; i < myString.length; i++) {

        if (myString.charAt(i) !== "o" && myString.charAt(i) !== "O" && myString.charAt(i) !== "x" && myString.charAt(i) !== "X") {
            error++
         
        } else {
            if (myString.charAt(i) === "x" || myString.charAt(i) === "X") {
                countX++;

            } else if (myString.charAt(i) === "o" || myString.charAt(i) === "O") {
                countO++;

            }
        }

        if (myString.charAt(i) == "X" || myString.charAt(i) == "O") {
            
            numberOfUpper++;

        } else {
            continue;
        }


    };

    if ( error > 0) {
        
        console.log("error");
    } else {
        
        if (countX > 0 && countX === countO) {
            console.log("true");
        } else {
            console.log("false");
        };
    
        console.log("there is ", numberOfUpper, " uppercase X ou O");
    }

};

countEach("xxxOoo");









