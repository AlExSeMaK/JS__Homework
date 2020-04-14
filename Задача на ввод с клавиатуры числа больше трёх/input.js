let n = 0;

while (true) {
    n = prompt('Введите число больше трёх:');
    if (n <= 3) {
        console.log("Неверный ввод, повторите:")
    }else {
        break
    }
}
let q = [];
for (let i = 0; i < n.length; i++) {
    q.push(n[i]);
}

console.log(q);

w = [];
for (let i = 0; i < q.length; i++) {
    if (parseInt(q[i]) % 2 === 0) {
        w.push(q[i]);
    }
}

console.log(w);