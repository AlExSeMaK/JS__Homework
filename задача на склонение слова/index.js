let count = prompt("Введите число");
count = parseInt(count);
endingWord(count);
function endingWord(num) {
    num = Math.floor(count % 10);
    switch (num) {
        case 1:
            console.log(`${num} товар`);
            return;
        case 2:
        case 3:
        case 4:
            console.log(`${num} товара`);
            return;
        default:
            console.log(`${num} товаров`);
            return;
    }
}