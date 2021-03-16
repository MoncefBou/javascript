// - Créez une fonction `checkPal` qui reçoit une string en paramètre
// - La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// - Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

function checkPal(myString) {
    var reverseString = "";
    for (var i = (myString.length - 1) ; i >= 0; i--) {
        reverseString = reverseString + myString.charAt(i);
    }

    if (myString.toLowerCase() == reverseString.toLowerCase()) {
        console.log("Palindrome !");
    } else {
        console.log("Nope");
    }
}

checkPal("kAyak");
