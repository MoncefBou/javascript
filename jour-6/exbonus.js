var moment = require("moment");

// ex1

function formatDate(myDate) {
    moment.locale('fr');
    
    var formatDate = moment(myDate).format('L');
    
    console.log(formatDate);
}

formatDate("2021-03-18");

// ex2

function calculateAge(birthDate) {
    var myAge = moment(birthDate, "YYYYMMDD").fromNow("yy");
    console.log("Il ou elle a", myAge);

}

calculateAge("2001-03-18");