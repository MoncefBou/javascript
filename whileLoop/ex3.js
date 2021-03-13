var usainBolt = 0;
var tysonGay = 0;

while (usainBolt <= 100 && tysonGay <= 100 ) {
    var metreBolt = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    var metreGay = Math.floor(Math.random() * (10 - 1 + 1) + 1);

    usainBolt = usainBolt + metreBolt;
    tysonGay = tysonGay + metreGay;

}

if (usainBolt > tysonGay) {
    console.log(usainBolt + " metre for Bolt. HE WIIIIIIIIIN !");
} else {
    console.log(tysonGay + " metre for Gay. HE WIIIIIIIIIN !");
}