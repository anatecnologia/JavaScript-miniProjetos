/**
 * JS- Aula 08- Lampada
 * Professor Jose de Assis
 */

function on () {  /**Cria uma função  */
     document.getElementById("lamp").src = " on.jpg";
}

function off () {
    document.getElementById("lamp").src = "off.jpg";
}
 
/**faz a lampada piscar */
function blink() {
    var intervalo = 0;
    var contador = 0;
    while(contador < 10 ){    /**Enquanto contador for menor q 10 pisque */
        intervalo += 300;
        setTimeout("document.getElementById('lamp'). src='on.jpg' ;" , intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lamp') . src='off.jpg';" , intervalo);
        contador++;
    }
}     
