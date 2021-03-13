var numbers = [];

for (i = 1; i <= 50; i++) {
    var newNumber = Math.floor(Math.random() * (100 + 1));
    numbers.push(newNumber);
}

console.log(numbers);

var sumNumbers = 0;

for (i = 0; i < (numbers.length - 1) ; i++) {
    sumNumbers = sumNumbers + numbers[i];
}

console.log(sumNumbers);