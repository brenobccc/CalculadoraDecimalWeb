var salvo=0;
var n;
function botao(num){
    var salvo=document.calc.visor.value;
    document.calc.visor.value=salvo+num;
    n=salvo+num;
}


function calcule(){
    var resultado=eval(n);
     document.calc.visor.value=resultado;   
}

function limpar(){
      document.calc.visor.value="";
}