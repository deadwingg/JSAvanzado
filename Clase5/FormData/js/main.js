console.log('Form Data')

let valores
let campos

function representarValoresFormData(datos) {
    console.log(datos)
    valores = datos.values()
    campos = datos.keys()

    do {
        let valor = valores.next()
        let campo = campos.next()
        //console.log(valor,campo)
        if(valor.done || campo.done) break;
        console.log(campo.value,':',valor.value)
    }
    while(true)
}

let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    //console.log(form[0].value)
    //console.log(form[1].value)
    let datos = new FormData(form)
    representarValoresFormData(datos)

    /* console.log(valores.next())
    console.log(valores.next())
    console.log(valores.next()) */
})

let button = document.querySelectorAll('button')[1]
console.log(button)
button.addEventListener('click', () => {
    let datos = new FormData()
    for(var i=0; i<10; i++) {
        datos.append(`Param-${i}`,i)
    }
    representarValoresFormData(datos)
})

// -----------------------------------------
// XMLHttpRequest POST con FormData
// -----------------------------------------

let datos = new FormData()
for(var i=0; i<10; i++) {
    datos.append(`Imagen-${i+1}`, `archivo${i+1}.jpg`)
}

let xhr = new XMLHttpRequest
xhr.open('post','url')
//xhr.setRequestHeader('content-type','application/json')
xhr.send(datos)
