let a =['dog', 'cat', 'rabbit', 'mouse'];
let q = a.slice(0, 2);
let w = a.slice(2, 4);
q.pop();
console.log(q.concat(w));