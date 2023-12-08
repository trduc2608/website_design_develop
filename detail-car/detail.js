window.onload = function() {
  var carName = localStorage.getItem('selectedCarName');
  if (carName) {
    document.querySelector('.car-name h1').innerText = carName;
  }

  var priceCar = localStorage.getItem('selectedPriceCar');
  if (priceCar) {
    document.querySelector('.price h1').innerText = priceCar
  }
};

