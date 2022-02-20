var contador = 1;
var precioTotal = 0;

var unidad = document.getElementById("unidad");
var precioTotal = document.getElementById("precioTotal");
var precioArticulo = document.getElementById("precioArticulo");

precioTotal.textContent = precioArticulo.textContent;

/* console.log(typeof(parseInt(precioArticulo.textContent)); */

function addUnidad(){
    console.log("addUnidad");
    contador++;
    unidad.textContent = contador;
    precioTotal.textContent = contador * parseFloat(precioArticulo.textContent);
    /* console.log(parseFloat(precioArticulo.textContent)); */
}

function remUnidad(){
    console.log("remUnidad");
    if(contador > 1){
        contador--;
        unidad.textContent = contador;
        precioTotal.textContent = contador * parseFloat(precioArticulo.textContent);
    }
    
}

function vaciarCarrito(){
    console.log("vaciarCarrito");
    precioTotal.textContent = 0;
    unidad.textContent = 0;
    contador = 0;
}

