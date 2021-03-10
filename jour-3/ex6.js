var sentence = "Hello Konexio !";
sentence = sentence.split("");

for ( i = 14; i >= 0; i--) {
        sentence.push(sentence[i]);

}

sentence = sentence.slice(15)
sentence = sentence.join("");

console.log(sentence);
