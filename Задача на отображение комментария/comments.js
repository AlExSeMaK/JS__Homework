let button = document.getElementById('button_commit')

button.addEventListener('click', addCommiter);

function addCommiter() {
    console.log('Нажатие кнопки добавления комментария');
    let valueCommit = document.getElementById('text_commit').value.trim();
    console.log(typeof(valueCommit));
    if (valueCommit === ''){
        button.removeEventListener();
    }
    let commitData = new Date();
    let section = document.createElement('section');
    section.setAttribute('class','comment');
    let text = document.createElement('p');
    let name = document.createElement('p')
    let img = document.createElement('img');
    let data = document.createElement('p');
    img.setAttribute('src', 'avatar.jpg');
    console.log(img);
    name.innerText = 'Гость';
    data.innerText = `${commitData.getDate()}:${commitData.getMonth()}:${commitData.getFullYear()} 
                      ${commitData.getHours()}:${commitData.getMinutes()}:${commitData.getSeconds()}`;
    let numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (numb.includes(commitData.getMonth())){
        data = `${commitData.getDate()}:0${commitData.getMonth()}:${commitData.getFullYear()} 
                ${commitData.getHours()}:${commitData.getMinutes()}:${commitData.getSeconds()}`;
    }
    text.innerText = valueCommit;
    section.append(img, name, data, text)
    document.body.prepend(section);
}


