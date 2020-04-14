let a = prompt();
let q = [];
for (let i = 0; i <= a.length; i++) {
    q.push(a[i]);
}
let b = q[0];
b = b.toUpperCase();
q = q.slice(1, q.length).join('');
console.log(b + q);
