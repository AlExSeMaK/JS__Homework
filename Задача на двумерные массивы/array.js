a = [
    [5, 6, 12, -90, 9, 0],
    [34, 67, 45, -40, 10, 98],
    [-77, 88, 99, 1, 3]
];

let b = 0;
let c = 0;
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < 7; j++) {
        if (a[i][j] > b) {
            b = a[i][j];
            c = j
        }
    }
}

console.log(b, c);