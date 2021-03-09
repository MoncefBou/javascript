var roundedNumber = 12.4;

if (roundedNumber - Math.floor(roundedNumber) > 0.5) {
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.floor(roundedNumber));
}