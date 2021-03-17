
function calculate(num1, operator, num2) {
    
    if (Number.isInteger(parseFloat(num1)) == false || Number.isInteger(parseFloat(num2)) == false) {
        
        console.log("error,", num1, "or", num2, "or both", "are not a number !");

    } else if (operator == "x" || operator == "x" || operator == "*") {
        
        var resultat = parseInt(num1) * parseInt(num2);
        console.log("=> Resultat : " + resultat);

    } else if (operator == "+") {
        
        var resultat = parseInt(num1) + parseInt(num2);
        console.log("=> Resultat : " + resultat);

    } else if (operator == "-") {
        
        var resultat = parseInt(num1) - parseInt(num2);
        console.log("=> Resultat : " + resultat);

    } else if (operator == "%") {
        
        var resultat = parseInt(num1) % parseInt(num2);
        console.log("=> Resultat : " + resultat);

    } else if (operator == "/") {
        
        var resultat = parseInt(num1) / parseInt(num2);
        console.log("=> Resultat : " + resultat);

    } else {
        
        console.log("error", operator, "is not an operator !");
    }
}

calculate(process.argv[2],process.argv[3],process.argv[4]);