function generatePassword(num) {
    var password = "";   
    if (num < 6 || num > 15 )  {
            console.log("error");
        } else {
            for (i = 1; i <= num; i++) {
                var randomNumber = Math.floor(Math.random() * (90 - 65 + 1) + 65);
                var randomLetter = String.fromCharCode(randomNumber);
                password = password + randomLetter; 
            }
            console.log(password);
        }
}

generatePassword(15);

// Table ASCII de 65 à 90 pour alphabet maj