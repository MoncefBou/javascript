var prompt = require("prompt");

var properties = [
    {
      name: "firstNumber",
      validator: /^[0-9]+$/,
      minimum: 0,
    },
    {
      name: "operators",
    },
    {
        name: "secondNumber",
        validator: /^[0-9]+$/,
        minimum: 0,
      },

  ];

  prompt.start();

  function onErr(err) {
    console.log(err);
    return 1;
  }

  prompt.get(properties, function (err, res) {
    if (err) {
          return onErr(err);
      }

      if ( res.operators == "x" ) {
        var resultat = parseInt() 
      }

      
  
    console.log("Données reçues :");
    console.log("=> Username : " + res.firstNumber);
    console.log("=> Password : " + res.secondNumber);
  });
    
    
    
