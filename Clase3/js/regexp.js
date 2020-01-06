/*
podemos usar regex de manera literal
 */
let literalRegExp = /^[a-zA-z0-9-\_\.]+@(\w+\.)+[a-z]{2,3}$/;

//O con un constructor
let constructorRegExp = new RegExp('^[a-zA-z0-9-\\_\\.]+@(\\w+\\.)+[a-z]{2,3}$');


/*
tipos de caracteres:
posicion : ^$
literales : 123azAZ
especiales: .|[]()
cantidad: ?+*{}
 */

/*
Especiales:
. simboliza cualquier caracter

 */