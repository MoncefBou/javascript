var request = require("request");

let countriesName = [];

request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {
    
    var allCountries = JSON.parse(body);
    
    function getCountries(arrayOfCountries) {

        countriesName = arrayOfCountries.map((elem) => elem.name );
        console.log(countriesName.join(" - "));
    }

    getCountries(allCountries);
})

console.log("All the name of the countries we have in this API are");

