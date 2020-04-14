function random_number(min, max) {
    min = Math.ceil(1);
    max = Math.floor(8);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = random_number(1, 7);
let chose_num = null;


while(parseInt(chose_num) !== num) {
    chose_num = prompt("Введите число:")
    if (parseInt(chose_num) === 0) {
        console.log("Выход");
        break;
    } else if (parseInt(chose_num) !== num && parseInt(chose_num) > num) {
        console.log("Загаданное число меньше");
    } else if (parseInt(chose_num) !== num && parseInt(chose_num) < num) {
        console.log("Загаданное число больше");
    } else if (parseInt(chose_num) === num) {
        console.log("Вы угадали")
    }
}
