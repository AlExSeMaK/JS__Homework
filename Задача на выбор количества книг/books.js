let books = [
    { author: 'Пушкин', title: 'Пир во время чумы', count: 2 },
    { author: 'Толстой', title: 'Война и мир', count: 0 },
    { author: 'Лермонтов', title: 'Тамань', count: 3 },
    { author: 'Гончаров', title: 'Обломов', count: 10 }
];

let section = document.querySelector(".tovars");
let n = books.length;

let createArray = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }
    return arr;
};

function generateField(Books) {
    let cell__grid = document.getElementsByClassName('tovars')[0]; // Получаем первый элемент
    cell__grid.style.cssText = `
        grid-template-columns: repeat(${n},1fr);
        grid-template-rows:  repeat(${n},1fr);
   `;
    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        creatElem(i,Books, div);
        cell__grid.append(div);
    }
}
function creatElem(item, Object, div) {
    let title = document.createElement("h3");
    title.innerText = Object[item].title;
    let author = document.createElement("cite");
    author.innerText = Object[item].author;
    let counter = document.createElement("div");
    counter.classList.add('counter');
    let count = document.createElement("input");
    count.classList.add("count");
    count.setAttribute("type", "number");
    count.setAttribute("value", "0");
    //  count.innerText = Object[item].count;
    let hidden = document.createElement("input");
    hidden.setAttribute("value", Object[item].count);
    hidden.setAttribute("type", "hidden");
    hidden.classList.add("hidden");
    let btnMinus = document.createElement("input");
    btnMinus.setAttribute("type", "text");
    btnMinus.setAttribute("readonly", "");
    btnMinus.setAttribute("value", "-");
    btnMinus.classList.add("btnMinus");
    let btnPlus = document.createElement("input");
    btnPlus.setAttribute("type", "text");
    btnPlus.setAttribute("readonly", "");
    btnPlus.setAttribute("value", "+");
    btnPlus.classList.add("btnPlus");
    counter.append(btnMinus, count, btnPlus, hidden);
    div.append(title, author, counter);
}

generateField(books);

let btnMinusList = document.querySelectorAll('.btnMinus');
let btnPlusList = document.querySelectorAll(".btnPlus");
let hidden = document.querySelectorAll(".hidden");
let btnCountList = document.querySelectorAll('.count');

btnPlusList.forEach(btnPlus => btnPlus.addEventListener('click', () => changeCountPlus(event)));
btnMinusList.forEach(btnPlus => btnPlus.addEventListener('click', () => changeCountMinus(event)));
btnCountList.forEach(count => count.addEventListener('input', () => changeCount(event)));

function changeCountPlus(event) {
    event.preventDefault();
    let maxKol = this.event.target.parentElement.children[3].value;
    let number = this.event.target.parentElement.children[1];
    +number.value >= +maxKol ? number.value = maxKol : number.value++;
}

function changeCountMinus(event) {
    event.preventDefault();
    let number = this.event.target.parentElement.children[1];
    number.value <= 0 ? number.value = 0 : number.value--;
}

function changeCount(event) {
    event.preventDefault();
    let maxKol = this.event.target.parentElement.children[3].value;
    let number = this.event.target.parentElement.children[1];
    console.log("Максимальное кол-во книг ", maxKol);

    number.value = parseInt(number.value) <= 0 ? 0 : parseInt(number.value) > parseInt(maxKol) ? maxKol : number.value;
}


