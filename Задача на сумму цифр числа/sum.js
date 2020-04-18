function sumNum(number) {
    if (number < 10) {
        return number;
    }else if (number / 10 === 0){
        return number % 10 + sumNum(Math.ceil(number / 10));
    }else {
        return number % 10 + sumNum(Math.floor(number / 10));
    }
}

console.log(sumNum(9));