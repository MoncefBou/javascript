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

var count = 0;
var mysteryWord = "MOMUS";
var wordHidden = mysteryWord.charAt(0).toUpperCase();

for (var i = 1; i < mysteryWord.length; i++) {
    wordHidden = wordHidden + "#";
}

console.log(wordHidden);

function displayPrompt() {

    prompt.get({
        name: "q", description: "Trouvez le mot", validator: /^[a-zA-Z]{5}$/,
        warning: "Ecrivez un mot de 5 lettres"
    },

        function play(err, res) {

            var testMysteryWord = mysteryWord;
            var answer = res.q.toUpperCase();
            var newWord = "";

            if (err) {
                return onErr(err);
            }

            console.log(mysteryWord.indexOf(answer.charAt(2)));

            for (var j = 0; j <= (mysteryWord.length - 1); j++) {
                if (testMysteryWord.indexOf(answer.charAt(j)) != "-1") {

                    if (answer.charAt(j) == testMysteryWord.charAt(j)) {
                        newWord = newWord + answer.charAt(j).green;
                        testMysteryWord = testMysteryWord.replace(answer.charAt(j), "#");

                    } else {
                        newWord = newWord + answer.charAt(j).yellow;
                        testMysteryWord = testMysteryWord.replace(answer.charAt(j), "#");
                        
                    }

                } else {
                    newWord = newWord + answer.charAt(j);
                    
                }
            }
            // console.log(newWord);

            if (answer === mysteryWord) {

                console.log("félicitation le mot était bien", newWord);

            } else if (count < 6) {

                count++;
                console.log(newWord);
                displayPrompt();


            } else {

                console.log("Vous avez perdu !");

            }

        }
    )
}

displayPrompt();