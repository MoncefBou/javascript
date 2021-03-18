// Vous vous souvenez de **Motus** ? Aujourd'hui on va le coder ! Petit rappel des règles :

// - Un mot mystère (ici de 5 lettres) est proposé, on ne connaît que la première lettre
// - Le joueur a six tentatives pour deviner le mot mystère, et pour chaque tentative :
//     - Les lettres qui sont à la bonne place sont en rouge
//     - Les lettres qui sont à la mauvaise place sont en jaune
//     - Les lettres qui n'existent pas dans le mot mystère restent neutres

var prompt = require("prompt");
var colors = require("colors");

prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

function displayPrompt() {
    prompt.get({
        name: "q", description: "Trouvez le mot", validator: /^\w+$/,
        warning: "La maison n'accepte que les lettres !"
    }, function play(err, res) {

        var mysteryWord = "motus";

        var wordHidden = mysteryWord.charAt(0).toUpperCase();

        for (var i = 1; i < mysteryWord.length; i++) {
            wordHidden = wordHidden + "#";
        }

        for (var i = 1; i <= 6; i++) {

            if (err) {
                return onErr(err);
            }

            for (var j = 0; j <= (mysteryWord.length - 1); i++) {
                if (mysteryWord.indexOf(res.q.charAt(i)) !== "-1"  ) {
                    
                

                } else if () {

                

                } else {

                    console.log("Bravo vous avez trouvé le mot", mysteryWord.length, "!!!");

                }
            }
        }
    })
}

displayPrompt();

var mysteryWord = "motus";

var wordHidden = mysteryWord.charAt(0).toUpperCase();

for (var i = 1; i < mysteryWord.length; i++) {
    wordHidden = wordHidden + "#";
}

console.log(wordHidden);