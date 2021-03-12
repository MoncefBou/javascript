var dice = null;
var count = 0;

while ( dice !== 6 ) {
    dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    count++;
}

console.log(count);