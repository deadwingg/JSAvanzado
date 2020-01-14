console.log('Ajax externo');

let url_nocors = 'https://jsonplaceholder.typicode.com/users';
let url_cors = 'https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json';

let url = url_cors;

let xhr = new XMLHttpRequest;
xhr.open('get', url);
xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        let respuesta = JSON.parse(xhr.response);
        console.log(respuesta)
    }
});
xhr.addEventListener('error', () => {
    console.log('ERROR AJAX!!!');

    let script = document.createElement('script');
    script.src = `${url}&callback=micallback`;
    document.body.appendChild(script)

});
xhr.send();

function micallback(res) {
    console.log(res)
}