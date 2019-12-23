// selection functions
//old (no se pueden usar con forEach)
var refTag = document.getElementsByTagName("h1");
var refClass = document.getElementsByClassName("titulo");
var refId = document.getElementById("titulo");
//new (ATR)
document.querySelectorAll("#titulo")
document.querySelectorAll(".titulo")
document.querySelectorAll("h1")

refId.innerHTML = "<i>Otro JSAv</i>"
//creamos un nuevo elemento --HASTA AHORA ESTAMOS EN MEMORIA
var p = document.createElement(p);
p.innerText = 'Soy un parrafo';
//lo agregamos al documento --VA AL CUERPO
var body = document.getElementsByTagName("body")[0];
body.appendChild(p);