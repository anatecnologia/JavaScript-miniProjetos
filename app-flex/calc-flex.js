/** 
 * JS - Cauculadora FLEX
 * @Author Professor José de Assis*/

var etanol, gasolina;    /*Cria 2 variaveis do mesmo tipo*/

function calcular(){                     /*Cria uma funcao*/
        etanol = parseFloat (frmFlex . txtEtanol . value .replace(",","."));   
        gasolina= parseFloat (frmFlex. txtGasolina. value. replace(",","."));
           /*Converte os numeros em float / replace substitui um carracterer por outro.  

           /*Abaixo estrutura If e Else (se sim , senao)*/
           if (etanol <  0.7 * gasolina) {                
                // menor que 70% gasolina
                document.getElementById ("status").src="etanol.png";
           }else {
                document.getElementById("status").src="gasolina.png";
           }
}

function resetar () {
        document.getElementById("status").src="neutro.png";
}