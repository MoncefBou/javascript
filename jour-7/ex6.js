let cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]


let cakeSoldOut = cakes.filter((num) => num.flavor == "chocolate").map( 
    function (num) {  
        
        num.status = "sold out !"
        return num;
});

console.log(cakeSoldOut);