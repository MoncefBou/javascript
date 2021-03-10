var tab = [];
min = 0;
max = 100;

for (i = Math.floor(Math.random() * (max - min + 1) + min); tab.length < 20; 
i = Math.floor(Math.random() * (max - min + 1) + min)) {
    if (tab.indexOf(i) !== -1) {
        continue;
    }
      else {
        tab.push(i);
    }
}

console.log(tab);

// tab.sort((a, b) => a - b);

// console.log(tab[tab.length -1])

for (i = 20; tab.length > 1; i--) {
    tab.sort((a, b) => a - b);
    tab.shift();
}

console.log(tab[0]);