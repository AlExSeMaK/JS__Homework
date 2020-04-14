let a = [
    [5, 6, 12, -90, 9, 0],
    [34, 67, 45, -40, 10, 98],
    [-77, 88, 99, -99, 1, 3]
];

let b = 0;
let c = 0;
let d = 0;

for (let i = 0; i < a.length; i++) {
    b = d;
    for (let j = 0; j < a[i].length; j++) {
        b += a[i][j];
    }
    if (b > c) {
        c = b;
    }
}

console.log(c);