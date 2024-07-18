

    
    function hola(){
        console.log("boton presionado");
         //referencia a la etiqueta de titulo por id
        let titulo = document.getElementById("txtTitulo");
       //cambio de color de la etiqueta de titulo
        titulo.style.color="#45f7a3";
        //referencia al vaor del input por id
        let dato = document.getElementById("txtDato").value;
        //asignacion a la etiqueta de titulo el dato tomado del input
        titulo.innerText = dato;
    }
    console.log("esto es javascritp por consola");

//no se pasa el javaScript dentro del htmls, hoy en dia se referenciay lo metemeos dentro de js(creamos un documento app.js). esto ya es punto js y 
//por tanto no necesito etiquetas.