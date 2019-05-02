window.addEventListener("load",slider);

function slider(){

var imagenes=['img800/1.jpg','img800/2.jpg','img800/3.jpg','img800/4.jpg','img800/5.jpg','img800/6.jpg'];
var imgs=document.getElementById("img");

setInterval(slideShow, 2000);
var x=1;
function slideShow(){
    if(x<5){
        x=x+1;
    }else{
        x=1;
    }
    imgs.innerHTML="<img src="+imagenes[x-1]+">";
}
}