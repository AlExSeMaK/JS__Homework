let arr = [
    [1, 3, 4],
    [3, 7, 9],
    [-90, 12, -12]
];
console.log('Вывод исходного массива');
for (let item of arr) {
    console.log(item)
}

let newArr = [];
LessZero = (item, index, array) => {
    for (let i = 0; i < array[index].length; i++) {
        array[index][i] = item[i] + 2;
    }
    return item;
};

newArr = arr.map(LessZero);
console.log(newArr);