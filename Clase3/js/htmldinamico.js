console.log('connected');

let btn = document.querySelector('button');
let agregado = false;
btn.addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest();
    if (!agregado) {
        xhr.open('get', 'plantilla.html');
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                let plantilla = xhr.response;
                // console.log(plantilla);
                let newDiv = document.createElement('div');
                newDiv.innerHTML = plantilla;
                document.body.appendChild(newDiv);
            }
        });
        xhr.send();
        agregado = true;
    }
});
