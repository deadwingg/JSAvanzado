var titulo = document.querySelector("h1");
// titulo.innerText = 'Título creado desde JS';
titulo.innerHTML = 'Título creado desde <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="blank">JS</a>'
console.log(titulo.innerText);

titulo.classList.add("azul");
titulo.classList.remove("azul");
// titulo.classList.toggle("azul");

titulo.id = 'titulo'

var items = document.querySelectorAll("li");
console.log(items);


for (let index = 0; index < items.length; index++) {
    const item = items[index];
    item.innerHTML = `Elemento Número ${index+1}`;
    item.style.color = 'red';
}

var parrafo = document.createElement('p');
parrafo.innerText= 'Soy un parrafo';
parrafo.style.backgroundColor='black';
parrafo.style.color = 'yellow';
parrafo.id = 'parrafo';
parrafo.classList.add('txt');
document.body.appendChild(parrafo);

//Sin tomar en cuenta la performance
/*
var ul = document.createElement('ul');
for (let i = 0; i < 10; i++) {
    var li = document.createElement('li');
    li.innerText = `Elemento ${i+1}`;
    ul.appendChild(li);
}
document.body.appendChild(ul);
*/

//usando un solo append child
var ul = document.createElement('ul');
for (let i = 0; i < 10; i++) {
    var li = document.createElement('li');
    ul.innerHTML += `<li>Elemento LI ${i+1}</li>`;
}
document.body.appendChild(ul);