var request = require("request");

function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {
        let randomJokes = JSON.parse(body)

        console.log(randomJokes.value);

    })
}

getFact();

console.log("The random Chuck Norris fact here is ");