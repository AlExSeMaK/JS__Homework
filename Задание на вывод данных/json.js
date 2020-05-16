let jsonFromServer = `[{"name":"Люся","age":"1 год","color":"трехцветная","additional_info":{"vaccinations":true,"passport":true}},{"name":"Том","age":"3 месяца","color":"белый","additional_info":{"vaccinations":false,"passport":false}},{"name":"Макс","age":2,"color":"серый","additional_info":{"vaccinations":false,"passport":true}},{"name":"Василий","age":3,"color":"черный","additional_info":{"vaccinations":true,"passport":true}}]`;
let objFromJson = JSON.parse(jsonFromServer)
console.log(objFromJson);

for (let i = 0; i < objFromJson.length; i++) {
    let section = document.createElement('section');
    section.setAttribute('class', 'card')
    let name = document.createElement('p');
    name.innerText = objFromJson[i]['name'];
    console.log(name);
    let photo = document.createElement('img');
    photo.setAttribute('src', 'cat.jpg');
    let age = document.createElement('p');
    age.innerText = `Возраст: ${objFromJson[i]['age']}`;
    let dop = document.createElement('div');
    let inf = document.createElement('p');
    inf.innerText = 'Дополнительная информация';
    let color = document.createElement('p');
    color.innerText = `Цвет: ${objFromJson[i]['color']}`;
    let vac = document.createElement('p');
    let dod = objFromJson[i]['additional_info'];
    console.log(dod);
    if (objFromJson[i]['additional_info']['vaccinations'] === true) {
        vac.innerText = `Прививки: есть`
    }else {
        vac.innerText = `Прививки: нет`
    }
    let doc = document.createElement('p');
    if (objFromJson[i]['additional_info']['passport'] === true) {
        doc.innerText = `Документы: есть`
    }else {
        doc.innerText = `Документы: нет`
    }

    dop.append(inf, color,doc, vac);
    section.append(name, photo, age, dop);
    document.body.prepend(section);
}