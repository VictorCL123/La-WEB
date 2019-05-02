window.addEventListener("load",inicio);
var tirada;
var compu;
var res;
var resu;
function inicio(){
    //alert("Hola 1");
    tirada = ["<img src= 'img/piedra.png'>","<img src= 'img/papel.png'>","<img src= 'img/tijeras.png'>"];
    compu = Math.floor(Math.random()*3);
    document.getElementById("tiraCompu").innerHTML=tirada[compu];

}

function juego(opc){
    var resultado=["¡Empataste!","¡Ganaste!","¡Perdiste!"];
    var jugadas=[[0,1,2],[2,0,1],[1,2,0]];

    if(opc==0){
        document.getElementById("tira").innerHTML=tirada[opc];
    }
    if(opc==1){
        document.getElementById("tira").innerHTML=tirada[opc];
    }
    if(opc==2){
        document.getElementById("tira").innerHTML=tirada[opc];
    }

    res=resultado[jugadas[compu][opc]];
    document.getElementById("resultado").innerHTML=res;
    
}

function habla(){
var hablar=new SpeechSynthesisUtterance(res);
speechSynthesis.speak(hablar);

}
