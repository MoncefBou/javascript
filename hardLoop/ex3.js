var numbers = [];

for ( i = 0; i <= 50; i++) {
    var newNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    numbers.push(newNumber);
}

console.log(numbers);

var i = 0;

while ( numbers[i] < 75 || numbers[i] > 100) {
    i++
}

console.log(numbers[i]);