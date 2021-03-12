for (i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " est un multiple de 3 et 5 donc fizzbuzz");
    } else if (i % 3 == 0) {
        console.log(i + " est un multiple de 3 donc fizz");
    } else if (i % 5 == 0) {
        console.log(i + " est un multiple de 3 et 5 donc buzz");
    } else if (i % 7 == 0) {
        continue;
    } else {
        console.log(i);
    }
}

