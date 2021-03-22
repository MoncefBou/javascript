let prompt = require("prompt");

let mysteryWord = "motus";
let count = 0;

let arrayMysteryWord = mysteryWord.toUpperCase().split("");

let wordToShow = arrayMysteryWord.map((letter) => letter = "_").join(" ");

console.log(wordToShow);

prompt.start();

function onErr(err) {
    console.log(err);
    return 1;
}

function displayPrompt() {
    prompt.get(
        { name: "q", description: "Voulez vous tenter un mot ? yes = y, no = n" }, function (err, res) {

            if (res.q === "y") {

                function onErr(err) {
                    console.log(err);
                    return 1;
                }

                prompt.get({
                    name: "mot", description: "Quel est le mot ?", validator: /^[A-Za-z]+$/gm,
                    warning: "N'utilisez que des lettres SVP !"
                }, function (err, res2) {

                    if (err) {

                        return onErr(err);

                    } else if (res2.mot.toUpperCase() !== mysteryWord.toUpperCase()) {

                        count++;

                        if (count == 10) {

                            console.log("Vous avez perdu désolé...")

                        } else {

                            console.log("oups... plus que", (10 - count), "chance(s) !");
                            console.log(wordToShow);
                            displayPrompt();
                        }

                    } else {
                        console.log("VICTOIRE, le mot était bien", mysteryWord.toUpperCase());
                    }

                });

            } else if (res.q === "n") {

                if (count == 9) {
                    console.log("il te reste qu'une seule chance, tente un mot plutot, soit pas bête !")
                    displayPrompt();
                } else {

                    prompt.get({
                        name: "lettre", description: "Proposez une lettre", validator: /^[a-zA-Z]{1}$/,
                        warning: "N'utilisez que des lettres et ne proposez qu'une lettre SVP !"
                    }, function (err, res3) {

                        if (err) {

                            return onErr(err);

                        }

                        if (wordToShow.indexOf(res3.lettre.toUpperCase()) != -1) {

                            count++;

                            console.log("Tu a déjà demandé cette lettre, concentre toi !");
                            console.log("Plus que", (10 - count), "chance(s)");
                            displayPrompt();

                        } else {

                            let arrayVerif = arrayMysteryWord.map(function (letter) {

                                if (letter == res3.lettre.toUpperCase() || wordToShow.indexOf(letter) != -1) {

                                    return letter;

                                } else {

                                    return " _ ";
                                }

                            });

                            wordToShow = arrayVerif.join("")

                            if (wordToShow === mysteryWord) {

                                console.log("VICTOIRE, le mot était bien", mysteryWord.toUpperCase());

                            } else if (mysteryWord.toUpperCase().indexOf(res3.lettre.toUpperCase()) != -1) {

                                count++;
                                console.log(wordToShow);
                                console.log("Bonne lettre bien joué, continue comme ça");
                                console.log("il te reste", (10 - count), "tentative(s)");
                                displayPrompt();

                            } else {

                                count++;

                                console.log("oups... plus que", (10 - count), "chance(s) !");
                                console.log(wordToShow);
                                displayPrompt()

                            }

                        }
                    });

                }
            } else {

                console.log(wordToShow);
                displayPrompt();

            }
        })
};

displayPrompt();