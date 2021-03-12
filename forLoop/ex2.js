var result = 0;

for (i = 100; i <= 1000; i++) {
    if ( (i % 7) == 0) {
        result++;
    } else {
        continue;
    }
}

console.log(result);