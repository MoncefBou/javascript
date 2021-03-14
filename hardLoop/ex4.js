var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];

// words.splice(2, 1);
// console.log(words);

var Newtab = [];
var NumberOfO = 0;

for ( i = 0; i <= (words.length - 1); i++ ) {
    var forNewTab = words[i].split("");
    
    for ( f = 0; f <= (forNewTab.length - 1); f++) {
        if (forNewTab[f] === " ") {
            forNewTab.splice(f, 1);
        } else if (forNewTab[f] === "o") { 
            NumberOfO++;
        } else {
            continue;
        }
    }
   
    Newtab = Newtab.concat(forNewTab);

}

console.log(Newtab);
console.log(NumberOfO);