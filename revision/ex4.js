// - Créez une fonction `swap` qui reçoit une string en paramètre
// - La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
// - Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"

function swap(myString) {
    var newString = "";

    for ( var i = 0; i <= myString.length; i++) {
        if (myString.charAt(i) == myString.charAt(i).toUpperCase() ) {
            newString = newString + myString.charAt(i).toLowerCase();
        } else {
            newString = newString + myString.charAt(i).toUpperCase();
        }
    }
    console.log(newString);
}

swap("Hello World");