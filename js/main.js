const WIDTH = 400;
const HEIGHT = 400;

//tesoro
let target = {
  x: numeroRandom(WIDTH),
  y: numeroRandom(HEIGHT)
};

// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distancia');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistancia(e, target);
  let distanceHint = getPista(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;
    console.log(clicks);
    console.log(distance);

  if (distance < 20 ) {
    alert(`Encontraste el tesoro, te tomó ${clicks} clicks!`);
    location.reload();
  }
});
