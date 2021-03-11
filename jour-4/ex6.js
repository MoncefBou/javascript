function format(num) {
    var withoutHours = num % 3600;
    var hours = (num - withoutHours) / 3600;
    
    var withoutMinutes = withoutHours % 60;
    var minutes = (withoutHours - withoutMinutes) / 60;
    
    var secondes = withoutMinutes;

    var result = hours + ":" + minutes + ":" + secondes;
    return result;
}

console.log(format(5000));
