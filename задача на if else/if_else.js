let sum = prompt("Введите число");

if (parseInt(sum) < 1000) {
    console.log(parseInt(sum));
}else if (parseInt(sum) > 999 && parseInt(sum) < 2000) {
    sum = parseInt(sum) / 100 * 95;
    console.log(sum);
}else if (parseInt(sum) > 1999 && parseInt(sum) < 3000) {
    sum = parseInt(sum) / 100 * 90;
    console.log(sum);
}else if (parseInt(sum) > 2999) {
    sum = parseInt(sum) / 100 * 85;
    console.log(sum);
}