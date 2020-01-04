let body = document.querySelector('body');
let items = "";

for (let i = 0; i < 10; i++) {
    items += `<li>Item ${i}</li>`;
}

let newUL = document.createElement('ul');
newUL.innerHTML = items;

body.appendChild(newUL);