var request = require("request");

function catchPokemon (id) {
request.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898", function (err, res, body) {
    
    let allPokemon = JSON.parse(body);
    
        console.log("id:", id);
        console.log("name:", allPokemon.results[ id - 1 ].name);

        
    })
}
catchPokemon(884);