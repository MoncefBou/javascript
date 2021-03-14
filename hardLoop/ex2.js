var numbers = [];

for ( i = 0; i <= 50; i++) {
    var newNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    numbers.push(newNumber);
}

console.log(numbers);

var maxNumbers = 0;

for ( i = 0; i <= (numbers.length - 1); i++ ) {
    if ( numbers[i] > maxNumbers) {
        maxNumbers = numbers[i];
    } else {
        continue;
    }
}

console.log(maxNumbers);
