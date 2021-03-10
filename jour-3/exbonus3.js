var classtab = ["Moncef", "Lucas", "Fethy", "Asma", "Rocio", "Bakagnan",
 "Mehdi", "Mugilan", "Francisco", "Amir", "Suleman", "Sabrina",
 "Lionel", "Karim", "Faruk", "Ikram", "Axel", "Fasulu", "Abdou"];
var min = 0;
var max = classtab.length - 1;

draw = Math.floor(Math.random() * (max - min + 1) + min);

console.log(classtab[draw]);