let num = [];
let size_array = prompt("Верхняя граница массива");
for (let i = 0; i < parseInt(size_array); i++)
    num.push(prompt('Введите число'));
console.log(num);
let check = prompt("Сумма чисел:");

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
        if (i !== j && parseInt(num[i]) + parseInt(num[j]) === parseInt(check)) {
            console.log(num[i], "с индексом", i, "+", num[j], "с индексом", j, "=", check );
        }

    }
}

let num = [[], [], []];
let size_array = prompt("Верхняя граница массива");
for (let i = 0; i < num.length; i++) {
    for (let j = 0; i < parseInt(size_array.length); j++) {
        num.push(prompt('Введите число'));
    }
}
console.log(num);
