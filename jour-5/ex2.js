function multiply(number) {

    var firstInput = parseFloat(number);

    if (Number.isInteger(firstInput) == false) {

        console.log("it's not a number integer");

    } else {

        for (var i = 1; i <= 10; i++) {

            console.log(firstInput, "x", i, '=', firstInput * i);

        }

    }
}

multiply(process.argv[2]);