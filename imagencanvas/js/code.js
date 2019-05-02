window.addEventListener("load",inicio);
var co;
let mousex=800;
let mousey=800;
ca.width = 600;
ca.height = 400;

function inicio(){
    var ca = document.getElementById("miCanvas");
    co = ca.getContext("2d")
    imagen();
}
function imagen(){
    var foto = new Image ();
    foto.src="img/guacamaya400.jpg";
	co.clearRect(0,0,800,800);
    co.drawImage(foto,0,0);
	co.canvas.addEventListener("mousemove",function(el){mousex=el.clientX})
	co.canvas.addEventListener("mousemove",function(el){mousey=el.clientY})
  	if(mousex>=50 && mousex<=370 && mousey>=50 && mousey<=370)
  	{
    	co.strokeStyle="yellow";
   		co.strokeRect(mousex-50,mousey-50,80,80)
		co.drawImage(foto,mousex-50,mousey-50,100,100,450,30,350,350);
	}
    var ciclo=setTimeout(imagen,10);
}
inicio();




