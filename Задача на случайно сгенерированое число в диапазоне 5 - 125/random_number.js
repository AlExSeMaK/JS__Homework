a = [];
for (let i = 25; i < 100; i++) {
    a.push(i);
}

let min = Math.ceil(1);
let max = Math.floor(113);
let q = Math.floor(Math.random() * (max - min + 1)) + min;

if (q in a) {
    console.log(`Число ${q} в диапазоне 25 - 100`);
}else {
    console.log(`Число ${q} не в диапазоне 25 - 100`)
}