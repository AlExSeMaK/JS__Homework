let n = prompt();
let m = [];
for (let i = 0; i < n.length; i++) {
    m.push(n[i]);
}
console.log(n);
console.log(m);

let q = 0;
for (let i = 0; i < m.length; i++) {
    q += parseInt(m[i]);
}
console.log(q);