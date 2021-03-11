function launchDice(numberOfDice) {
    var result = 0;
    for ( i = 1; i <= numberOfDice; i++) {
        var eachDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            result = result + eachDice;
    }
    return result;
}

var joueur1 = launchDice(5)
var joueur2 = launchDice(5)


if ( joueur1 > joueur2) {
    console.log("Le gagnant est le joueur1 avec " + joueur1 + " qui bat le joueur2 avec " + joueur2 )
} else if ( joueur1 < joueur2) {
    console.log("Le gagnant est le joueur2 avec " + joueur2 + " qui bat le joueur1 avec " + joueur1 )
} else {
    console.log("C'est la folie, le joueur1 et le joueur2 ont eu la même somme qui est " + joueur1)
}