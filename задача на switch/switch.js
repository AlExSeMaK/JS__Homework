let mounth = prompt("Введите месяц:");

switch (mounth) {
    case "Декабрь":
    case "Январь":
    case "Февраль":
        console.log("Зима");
        break;
    case "Март":
    case "Апрель":
    case "Май":
        console.log("Весна");
        break;
    case "Июнь":
    case "Июль":
    case "Август":
        console.log("Лето");
        break;
    case "Сентябрь":
    case "Октябрь":
    case "Ноябрь":
        console.log("Осень");
        break;
}