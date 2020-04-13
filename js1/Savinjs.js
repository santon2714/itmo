let firstSection = document.createElement("h1");
firstSection.innerText = "1. document.write, работа с URL и строками";
document.body.append(firstSection);
// 1. document.write, работа c URL и строками
let docWrite = document.write("anton savin"); // 1.1
let text = "anton savin";
document.write("<br/>");
document.writeln(text.split(" ").length, ' ', text.split(" ").join("").length); // 1.2
document.write("<br/>");
// 1.5
let hrefLocal = window.location.href;
let ssyl = "https://news.sportbox.ru/Vidy_sporta/Futbol/Russia/1st_division/stats/turnir_16006/game_1380705162"; 
document.write(hrefLocal);
document.write("<br/>");
document.write(hrefLocal.split(":")[0]);
document.write("<br/>");
document.write(hrefLocal.split(".")[1]);
document.write("<br/>");
document.write(hrefLocal.split("//")[1].split(".")[0]);
document.write("<br/>");
// 1.6
let hrefParam = "http://example.com?product=1234&utm_source=google";
function getQueryParams(href) {
    let queryParams = {};
    href.substring(href.indexOf('?') + 1, href.length).split('&')
    .forEach(param => {
        const paramKeyValue = param.split('=');
        queryParams[paramKeyValue[0]] = paramKeyValue[1];
    });
    return queryParams;

}

// 2. Основные тэги
let secondSection = document.createElement("h1");
secondSection.innerText = "2. Основные теги в документе";
document.body.append(secondSection);
let anchorHref = "https://developer.mozilla.org/ru/docs/Web/JavaScript";
// 2.1
for (let i = 0; i < 3; i++) {
    let anchor = (document.createElement('a'));
    anchor.href = anchorHref.concat(`/${i}`);
    anchor.innerText = `Ссылка ${i+1}`;
    anchor.style.marginRight = '5px';
    document.body.append(anchor);
}
// 2.3
document.write('<br/>');
for (let i = 0; i < 3; i++) {
    let img = (document.createElement('img'));
    img.id = `value ${i+1}`;
    img.src = "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/2b/d8/8459e896f2156cab8bad96b21fcce84a5ddd819c2be61626847630.jpg";
    img.style.height = 30 + i * 10 + 'px';
    img.style.width = 70 + i * 10 + 'px';
    img.style.marginRight = '5px';
    document.body.append(img);
}
// 2.4-2.8
document.write('<br/>');
document.write('Количество anchors равно ' + document.body.getElementsByTagName('a').length);
console.log('Количество anchors через JS '+ document.body.getElementsByTagName('a').length);
document.write('<br/>');
document.write('Количество link-ов равно ',
document.getElementsByTagName('link').length);
console.log('Количество link-ов в html: ',
document.getElementsByTagName('link').length);
document.write('<br/>');
document.write(document.body.getElementsByTagName('a').item(0).innerText);
document.write('<br/>');
document.write('Количество картинок ' + document.body.getElementsByTagName('img').length);
document.write('<br/>');
document.write('Ширина первой картинки ' + document.body.getElementsByTagName('img').item(0).width);
// 2.9
let images = document.querySelectorAll('img');
let maxWidth = images[0].width;
images.forEach((img) => {
    if (img.width > maxWidth) 	{
        maxWidth = img.width;
    }
});
document.write('<br/>');
document.write("Ширина самой широкой картинки равна ", maxWidth);
// 2.10
let imagesHeightSum = 0;
images.forEach((img) => {
    imagesHeightSum += img.height;
});
document.write('<br/>');
document.write("Сумма высот картинкок равна ", imagesHeightSum);

// 3. Основные тэги
let thirdSection = document.createElement("h1");
thirdSection.innerText = "3. Формы";
document.body.append(thirdSection);

// 3.1

let forms = [];
for (let i = 0; i < 10; i++) {
    let form = document.createElement('form');
    form.name = `formName${i+1}`;
    form.id = `formId${i+1}`;
    forms.push(form);
    document.body.append(form);
}

// 3.2
let evenFormsNames = forms.filter((form) => form.id.substring(9, form.id.length) % 2 == 0)
    .map((evenForm) => evenForm.id);
document.write(evenFormsNames);

// 3.3
let formsHTML = document.body.getElementsByTagName('form');
for (let i = 0; i < formsHTML.length ; i++) {
    let inputText = document.createElement('input');
    let inputPass = document.createElement('input');
    let inputMail = document.createElement('input');
    inputText.type = "text";
    inputText.style.margin = "5px";
    inputPass.type = "password";
    inputPass.style.margin = "5px";
    inputMail.type = "email";
    inputMail.style.margin = "5px";
    formsHTML[i].appendChild(inputText);
    formsHTML[i].appendChild(inputPass);
    formsHTML[i].appendChild(inputMail);
}
// 3.4
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Показать имя формы";
    button.style.margin = "5px";
    button.onclick = () => alert(button.innerText);
    formsHTML[i].appendChild(button);
}
// 3.5
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Принадлежность";
    button.style.margin = "5px";
    button.onclick = () => alert(button.parentNode.id);
    formsHTML[i].appendChild(button);
}
// 3.6
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'reset';
    button.innerText = "Сбросить";
    button.style.margin = "5px";
    formsHTML[i].appendChild(button);
}

// 3.7
for (let i = 0; i < formsHTML.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Показать количество полей";
    button.style.margin = "5px";
    button.onclick = () => {
        alert(`Количество полей равно ${button.parentNode.childNodes.length}`);
    };
    formsHTML[i].appendChild(button);
}

// 3.8
document.body.querySelectorAll('button').forEach((button)=> {
    button.style.padding = '10px';
    button.style.borderRadius = '10px';
    button.style.backgroundColor = '#c8b22c';
    button.style.border = '1px solid rgba(151, 231, 199, 10)';
    button.style.cursor = 'pointer';
    button.onmouseover = () => {
        button.style.backgroundColor = '#a1b89f';
        button.style.color = "white";
    };
    button.onmouseout = () => {
        button.style.color = 'black';
        button.style.backgroundColor = '#c8b22c';
    };
    let image = document.createElement('img');
   image.style.width = '20px';
    image.style.height = '20px';
    image.style.verticalAlign = 'bottom';
    switch (button.innerText) {
        case "Показать имя формы": image.src = 'имя.png';
            break;
        case "Принадлежность":image.src = 'принадлежность.png';
            break;
        case "Сбросить": image.src = 'сбросить.png';
            break;
        case "Показать количество полей": image.src = 'количество.png';
            break;
        default:
            image.src = 'icons/количество.png';
    }
    button.prepend(image);
});
