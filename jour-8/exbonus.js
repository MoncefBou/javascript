var bankScore = Math.floor(Math.random() * (21 - 16 + 1) + 16);
var playerScore = 0;
var prompt = require("prompt");

prompt.start();

prompt.start();

function displayPrompt() {
    prompt.get({ name: "q", description: "Pour tirer une carte entre la lettre 't'" }, function (err, res) { 
        if (res.q === "t") { 
            var cardDraw = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            playerScore += cardDraw;
            if ( playScore <= 16 ) {
                console.log("Tu a tiré la carte", cardDraw);
                console.log("Ton score est de", playerScore);

            } else if ( 21 >= playScore > 16 ) {
                console.log("Tu a tiré la carte", cardDraw);
                console.log("Ton score est de", playerScore);
                
                function withPass() {
                    prompt.get({ name: "q", description: "Vous aimez la pizza ? y = yes, n = no" }, function (err, res) { // permet de paramétrer la question
                      if (res.q === "y" || res.q === "n") { // valide la saisie
                        console.log("Bien reçu !");
                      } else {
                        displayPrompt(); // relance le prompt si la saisie n'est pas valide
                      }
                    });
                  }
                  
                  withPass();

            } else {

            }


        } else {
            console.log("Frérot t'as pas le choix entre la lettre 't'");
            displayPrompt();
        }
    });
}

displayPrompt(); // on n'oublie pas d'appeler la fonction ;)




