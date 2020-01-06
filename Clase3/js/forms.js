let btn = document.querySelector('#btn');
let input = document.querySelector('input');
/*btn.addEventListener('click', (e)=> {
    e.preventDefault();
    //checkvalidity retorna true siempre, a menos que haya required y
    //la entrada este vacía
    console.log('click',input.checkValidity());

});*/

/*input.addEventListener('input', ()=> {
   let dato = input.value; //trim corta espacios adelante y atras
   let longitud = dato.length;
   if(longitud > 3){
       let datoTrim = dato.trim();
       input.setCustomValidity('');
   } else {
       console.log('Este campo debe tener mas de 3 caracteres');
   }
   /!* else {
       input.setCustomValidity('Este campo debe tener mas de 3 caracteres');
   }*!/
});*/
let form = document.querySelector('#formulario');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let dato = input.value;
    let longitud = dato.length;

    //regexp
    let miRegExp = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    if (miRegExp.test(dato)){
        console.log('submit', dato);
    } else {
        console.log('Error en la entrada');
    }


    /*if(longitud > 3){
        let datoTrim = dato.trim();
        if(datoTrim.indexOf(' ') <= 0){
            //con URI nos aseguramos de que no se pueda inyectar codigo
            let datoSeguro = encodeURIComponent(datoTrim);
            console.log('submit', datoTrim);
        } else {
            console.log('No se permiten espacios intermedios en este campo');
        }
        // input.setCustomValidity('');
    } else {
        console.log('Este campo debe tener mas de 3 caracteres');
    }*/
    /* else {
        input.setCustomValidity('Este campo debe tener mas de 3 caracteres');
    }*/

});
