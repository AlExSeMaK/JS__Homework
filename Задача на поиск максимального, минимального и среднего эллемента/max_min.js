n = prompt("Введите размер массива:");

let min = Math.ceil(1);
let max = Math.floor(100);
let q = [];

for (let i = 0; i < n; i++) {
    q.push(Math.floor(Math.random() * (max - min + 1)) + min);
}

console.log(q);

let a = 0;
for (let i = 0; i < q.length; i++) {
    if (q[i] > a) {
        a = q[i];
    }
}

console.log(a);
let b = a;

for (let i = 0; i < q.length; i++) {
    if (q[i] < b) {
        b = q[i];
    }
}

console.log(b);

let d = 0;


if ((parseInt(a)+ parseInt(b)) % 2 === 0) {
    d = (parseInt(a) + parseInt(b)) / 2;
}else {
    d = (parseInt(a) + parseInt(b) +1) / 2;
}

let c = d;

while (true) {
    if (q.includes(c)) {
        console.log(c);
        break
    }else  if (q.includes(d)) {
        console.log(d);
        break
    }else {
        c++;
        d--;
    }
}



