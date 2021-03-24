var request = require("request");

request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {
    let randomJokes = JSON.parse(body)
  
    function getFact (elem) {
        console.log(elem.value);

    }

    getFact(randomJokes);

} )

console.log("random Chuck Norris fact here");