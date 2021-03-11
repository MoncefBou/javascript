function addUp(num) {
    var result = 0
    for ( i = 0 ; i <= num; i++) {
        var result = result + i ;
    }
    return result;
};

console.log(addUp(12));