window.addEventListener("load",Inicio);//Escuchador 
//alert("hola");

function Inicio(){
  var c = document.getElementById("can");
  var con = c.getContext("2d");

  con.moveTo(0,0);
  con.lineTo(300,150);
 
  //con.fillStyle="#0000FF";//como dibujar el rectangulo

  con.rect(0,0,300,150);//Instruccion para divujar rectangulo
  con.stroke();

  con.fillStyle="#0000FF";
  con.fillRect(150,10,50,50);

}

/*
esto en css:
canvas{
    border: 2px solid red;
}
*/ 