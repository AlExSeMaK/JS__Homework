let books = [
    {author: 'Пушкин', title: 'Пир во время чумы', count: 2},
    {author: 'Толстой', title: 'Война и мир', count: 0},
    {author: 'Лермонтов', title: 'Тамань', count: 3},
    {author: 'Гончаров', title: 'Обломов', count: 10}
];

let booksArea = document.getElementById('book');

for (let i = 0; i < books.length; i++) {
    let author = document.createElement('p');
    author.innerText = books[i]["author"];
    console.log(author);
    let title = document.createElement('p');
    title.innerText = books[i]["title"];
    console.log(title);
    let count = document.createElement('p');
    count.innerText = books[i]["count"];
    console.log(count);
    let bib = document.createElement('div');
    bib.setAttribute('class', 'book')
    let div = document.createElement('div');
    // div.setAttribute('class', 'flex')
    let add = document.createElement('p');
    add.innerText = '+';
    add.setAttribute('name', 'add')
    let numb = document.createElement('input');
    numb.setAttribute('type', 'text');
    let remm = document.createElement('p');
    remm.innerText = '-';
    div.append(remm, numb, add);
    bib.append(author, title, count, div);
    document.body.prepend(bib);
}

let adder = document.querySelectorAll('.book :nth-child(4) :last-child');
console.log(adder);

let count = document.querySelectorAll('.book :nth-child(3)');
console.log(count)

for (let elem of adder) {
    elem.addEventListener('click', addBook);
}
function addBook() {
    console.log('Плюс реагирует на событие');
    let val = 0;
    console.log(count)

}






