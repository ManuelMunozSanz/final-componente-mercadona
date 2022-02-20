var contador = 1;

var unidad = document.getElementById("unidad");

function addUnidad(){
    console.log("addUnidad");
    contador++;
    unidad.textContent = contador;
}

function remUnidad(){
    console.log("remUnidad");
    if(contador > 1){
        contador--;
        unidad.textContent = contador;
    }
    
}

