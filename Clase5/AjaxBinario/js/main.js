console.log('Ajax Binario')

function cargarImagen(url) {
    let img = document.querySelector('img')
    let progress = document.querySelector('progress')
    let span = document.querySelector('span')
    img.src = ''
    progress.value = 0
    span.innerText = '0%'

    let xhr = new XMLHttpRequest
    let urlSinCache = url + '?' + Date.now()
    console.log(urlSinCache)
    xhr.open('get',urlSinCache)

    xhr.responseType = 'blob'
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let imagenBlob = xhr.response
            console.log(imagenBlob)
            let url = URL.createObjectURL(imagenBlob)
            console.log(url)
            /*
            let img = document.createElement('img')
            img.src = url
            document.body.appendChild(img)
            */
           img.src = url
        }
    })

    xhr.addEventListener('progress', e => {
        //console.log('descargando...')
        console.log(e)
        if(e.lengthComputable) {
            let porcentaje = parseInt((e.loaded * 100) / e.total)
            console.log(porcentaje + '%')
            progress.value = porcentaje
            span.innerText = porcentaje + '%'
        }
    })
    xhr.send()
}


let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    //console.log(form[0].value)
    let archivo = form[0].files[0].name
    console.dir(archivo)
    cargarImagen(archivo)
})


