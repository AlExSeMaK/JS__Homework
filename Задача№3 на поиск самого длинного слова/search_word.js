let a = prompt('Введите предложение').split(' ');
let b = 0;
let c = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i].length > b) {
        b = a[i].length;
        c = a[i];
    }
}
console.log(`Самое длинное слово ${c} с длинное ${b}`);
