/*
En cada pestaña del navegador se crea un objeto history que tiene metodos para recorrerlo
foward() back() go() ;
y tambien tiene el metodo pushState();
que nos permite incorporar navegaciones ficticias a historial
 */

history.pushState(null,'demo','test');

/*
Al agregar esta funcion la url aparece en el navegador como /{ruta}
Este metodo es la nueva forma de hacerlo, anteriormente se utilizaba
location.hash();
 */

location.hash = 'test2';

/*
tambien aparece en el  navegador pero como #{ruta}
 */