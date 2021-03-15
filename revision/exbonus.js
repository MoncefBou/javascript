// - Créez une fonction `makeItSpongeBob` qui reçoit une string en paramètre
// - La fonction retourne une string avec le même texte en alternant majuscule / minuscule
// - Appelez votre fonction avec l'argument "Javascript is easy" et vérifiez le résultat

function makeItSpongeBob(myString) {
    var newString = "";

    for ( var i = 0; i <= (myString.length - 1); i++) {
        if ( i == 0 || newString.charAt(i - 1) === newString.charAt(i - 1).toLowerCase() || newString.charAt(i - 1) == " ") {
            newString = newString + myString.charAt(i).toUpperCase();
            // console.log(newString);
        } else {
            newString = newString + myString.charAt(i).toLowerCase();
            // console.log(newString);
        }
    }
    
    console.log(newString);
}

makeItSpongeBob("Javascript is easy");