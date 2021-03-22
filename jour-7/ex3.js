let longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

let shortNames = longNames.map((num) => num = { name: num.firstName + " " + num.lastName });

console.log(shortNames)