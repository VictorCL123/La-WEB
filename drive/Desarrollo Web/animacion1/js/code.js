var ca = document.getElementById("can");
var co = ca.getContext("2d");
var x=25;
var s=1;
var z=-1;


function dibujar(){
co.clearRect(0,0,400,400);//Funcion para limpiar el area de un rectangulo
co.beginPath();
co.arc(x,375,25,0,2*Math.PI);
co.fillStyle="red";
co.fill();
co.closePath();
//x+=1;//posicion para que se desplase la pelotita
if(x<375 && s==1){
   x+=1;
}
else{
    s=0;
}
if(x<=375 && s==0){
    x-=1;
}
if(x<=25)

}
setInterval(dibujar,10);// el segundo parametro dice en tiempo
