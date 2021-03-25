var bankScore = Math.floor(Math.random() * (21 - 16 + 1) + 16);
var playerScore = 0;
var prompt = require("prompt");






// FONCTION QUAND LE SCORE EST INFERIEUR OU EGALE A 16
function displayPrompt() {
    prompt.get({ name: "q", description: "Pour tirer une carte entre la lettre 't'", validator: /^[a-zA-Z]{1}$/,
    warning: "N'utilisez que des lettres et ne proposez qu'une lettre SVP !" }, function (err, res) {
        if (res.q === "t") {
            var cardDraw = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            playerScore += cardDraw;
            if (playerScore <= 16) {
                console.log("Tu a tiré la carte", cardDraw);
                console.log("Ton score est de", playerScore);
                displayPrompt()

            } else if (playerScore <= 21 && playerScore > 16) {
                console.log("Tu a tiré la carte", cardDraw);
                console.log("Ton score est de", playerScore);

                displayPromptPass()

            } else {
                console.log("Tu a tiré la carte", cardDraw);
                console.log("Ton score est de", playerScore);
                console.log("C'est perdu désole frérot");

            }

        } else {
            console.log("Frérot t'as pas le choix entre la lettre 't'");
            displayPrompt();
        }
    });
}
// FONCTION QUAND LE SCORE EST PLUS GRAND QUE 16
function displayPromptPass() {
    prompt.get({ name: "q", description: "Ton score est de plus de 16, donc soit tu tires ou tu pass ? tirer = 't' ou pass = 'p'", validator: /^[a-zA-Z]{1}$/,
    warning: "N'utilisez que des lettres et ne proposez qu'une lettre SVP !" }, function (err, res2) {
        if (res2.q === "t") {
            var cardDraw = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            playerScore += cardDraw;

            if (21 >= playerScore > 16) {
                console.log("Tu a tiré la carte", cardDraw);
                console.log("Ton score est de", playerScore);

                displayPromptPass()

            } else {
                console.log("Tu a tiré la carte", cardDraw);
                console.log("Ton score est de", playerScore);
                console.log("C'est perdu désole frérot, le score de la banque est", bankScore);

            }

        } else if ( res2.q === "p") {
            
            if ( playerScore <= bankScore ) {
                console.log("C'est perdu, le score de la banque est", bankScore);
            } else {
                console.log("Bien joué le score de la banque est", bankScore);
            }

        } else {
            console.log("T'as 2 choix... la lettre 't' pour tirer ou 'p' pour pass");
            displayPromptPass();
        }


    })
}


// C'EST PARTI
prompt.start();


function blackJack () { 

    if (playerScore <= 16) {
        displayPrompt();
        
    } else {
        
        displayPromptPass();
    }
}

blackJack();
