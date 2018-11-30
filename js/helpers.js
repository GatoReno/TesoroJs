
//punto de ubiación en el mapa
let numeroRandom = size => {
  return Math.floor(Math.random() * size);
}
/*
  obtenedremos la distancia entre el
  click del usuario,para eso usaremos
  el teorema de pitágoras
*/

let getDistancia = (e,target) =>{ // donde e es el evento click
  let diffx = e.offsetX - target.x;
  let diffy = e.offsetY - target.y;

return Math.sqrt((diffx * diffx) + (diffy * diffy));
}
 let getPista = dist => {
   if (dist < 30) {
     return "Estàs súper cerca!";
   }
   else if (dist < 40) {
       return "Estàs  cerca :3";
   }else if(dist < 100) {
       return "Extraño a Denise 3:";
   }else if(dist < 120) {
       return "Denise està durmiendo";
   }else if(dist < 150) {
       return "¿Debería cortarme el cabello?";
   }else{
     return "Aquí deberíamos generar respuestas aleatroias.";
   }
 }
