var request = require("request");

request.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118", function (err, res, body) {
    
    let allPokemon = JSON.parse(body);
    
    function catchPokemon (id) {
        console.log("id:", id);
        console.log("name:", allPokemon.results[id].name);

    }

    catchPokemon(260);
})