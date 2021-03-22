var fs = require("fs");

fs.readFile("./ex1.txt", function (err, data) {
    
    console.log("contenu du fichier :", data.toString());
    
})