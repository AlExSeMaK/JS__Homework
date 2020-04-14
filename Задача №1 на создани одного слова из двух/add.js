let a = prompt('Введите первое слово');
let b = prompt('Введите второе слово');

a = a.slice(0, a.length / 2);
b = b.slice(b.length / 2);

let c = a + b;

console.log(c);