let users = [
    {
        login: "qwe",
        age: 34,
        city: "Москва",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 23,
        city: "Москва",
        favouriteLangs: ["python", "javascript"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "c"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "scala"]
    },
    {
        login: "ght",
        age: 45,
        city: "Владивосток",
        favouriteLangs: ["php", "ruby"]
    },
];

function sort(arr) {
    let a = 0;
    for (let i = arr.length; i > 1; i--){
        a = arr[i - 1];
        if (arr[i].city > a.city){
            arr[i] = a;
        }
    }
    return arr;
}

console.log(sort(users));