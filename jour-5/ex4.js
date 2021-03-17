// - Installez et importez le package `prompt` (n'oubliez pas d'initialiser !) et lancez les méthodes de `prompt`
// - Créez une variable `mysteryNum` contenant une valeur aléatoire (un nombre entier entre 1 et 100)
// - Créez une fonction `play` qui demande au joueur "Quel est le nombre mystère ?" puis :
//     - si le joueur donne une valeur incorrecte (pas un nombre) on affiche "error" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop petit, on affiche "C'est plus !" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop grand, on affiche "C'est moins !" et on relance la fonction `play`
//     - si le joueur donne le bon nombre, on affiche "Bravo !!"
// - Appelez la fonction
// - Testez le jeu

var prompt = require("prompt");

var mysteryNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);

prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

function displayPrompt() {
    prompt.get({
        name: "q", description: "Quel est le nombre mystère ?", validator: /^[0-9]+$/,
        warning: "Choisissez un nombre entier s'il vous plaît"
    }, function play(err, res) {

        if (err || Number.isInteger(parseFloat(res.q)) == false) {
            return onErr(err);
        } else if (parseInt(res.q) < mysteryNum) {

            console.log("C'est plus !");
            displayPrompt();

        } else if (parseInt(res.q) > mysteryNum) {

            console.log("C'est moins !");
            displayPrompt();

        } else {

            console.log("Bravo !!");

        }
    })
}

displayPrompt();