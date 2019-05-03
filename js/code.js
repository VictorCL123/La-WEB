let cu1=document.getElementById("c1");
let cu2=document.getElementById("c2");
let cu3=document.getElementById("c3");
let cu4=document.getElementById("c4");
//let st=document.getElementById("star");
let incrementa=1;
let flag=1;
rotar();
function rotar()
{
   if(incrementa>360)
   {
        incrementa=1;
   }
   if(flag>0)
    {
      rota = "rotate("+incrementa+" 200 200)";
      cu1.setAttribute("transform", rota);
      cu3.setAttribute("transform", rota);
      //st.setAttribute("transform", rota);
      incrementa=incrementa*(-1);
      flag=flag*(-1);
    }
  if(flag<0)
  {
      rota = "rotate("+incrementa+" 200 200)";
      cu2.setAttribute("transform", rota);
      cu4.setAttribute("transform", rota);
      incrementa=incrementa*(-1);
      flag=flag*(-1);
      incrementa++;
  }
  setTimeout(rotar,1);
}
