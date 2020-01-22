console.log('Persistencia!');

let a = Number(localStorage.getItem('val')) || 1;

function cambiar(val) {
    localStorage.setItem('val',val);
    a = val;
}


//Persistencia en local
localStorage.setItem('numero', '3');
localStorage.setItem('string', 'Hola!');
localStorage.setItem('booleano', 'true');
localStorage.setItem('objeto', JSON.stringify({x:1}));

console.log(JSON.parse(localStorage.getItem('objeto')));
console.log(JSON.parse(localStorage.getItem('numero')));
console.log(localStorage.getItem('string'));
console.log(JSON.parse(localStorage.getItem('booleano')));

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = localStorage.getItem(key);
    console.log(i, key, item);
}

// Persistencia en session
sessionStorage.setItem('numero', 5);
sessionStorage.setItem('string', 'Hola from session!');
sessionStorage.setItem('booleano', 'false');
sessionStorage.setItem('objeto', JSON.stringify({y:1}));

for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    let item = sessionStorage.getItem(key);
    console.log(i, key, item);
}

//Persistencia en cookies
//no tienen api, funcionan en todos los navegadores

document.cookie = 'claveSession=12345;max-age=20'; // con ; podemos usar atributos max-age=TIME_IN_SECONDS