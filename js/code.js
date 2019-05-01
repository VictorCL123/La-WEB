var c1=document.getElementById("c1");
var c2=document.getElementById("c2");
var c3=document.getElementById("c3");
var c4=document.getElementById("c4");
var incrementa=1;
var flag=1;
function rotar()
{
   if(incrementa>360)
   {
        incrementa=1;
   }
   if(flag>0)
    {
      rota = "rotate("+incrementa+" 200 200)";
      c1.setAttribute("transform", rota);
      c3.setAttribute("transform", rota);
      incrementa=incrementa*(-1);
      flag=flag*(-1);
    }
  if(flag<0)
  {
      rota = "rotate("+incrementa+" 200 200)";
      c2.setAttribute("transform", rota);
      c4.setAttribute("transform", rota);
      incrementa=incrementa*(-1);
      flag=flag*(-1);
      incrementa++;
  }
  setTimeout(rotar,1000/60);
}
