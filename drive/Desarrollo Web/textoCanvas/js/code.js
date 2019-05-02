var ca = document.getElementById("miCanvas");
var co = ca.getContext("2d");


var x=Math.random()*550;
var y=Math.random()*350;
ca.width = 600;
ca.height = 400;


function textoAnimado()
{
    
     co.clearRect(0,0,600,400)
     x=Math.random()*550;
     y=Math.random()*350;
   // con.clearRect(0,0,600,400)

co.font = "50px Georgia";//cambiamos tipo de texto
co.fillStyle = "blue";
co.fillText("Hola Mundo!",x,y);//para poner texto en canvas
//en el parametro uno es el texto, en el dos es distancia, y tercero lo alto
co.strokeStyle = "yellow";
//co.strokeWeight = "5px";modificar grosor de texto 
co.strokeText("Hola Mundo!",x,y);//solo da el contexto de la letra no el relleno


}
setInterval(textoAnimado, 200);
//textoAnimado();

