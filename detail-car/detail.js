window.onload = function() {
  var carName = localStorage.getItem('selectedCarName');
  if (carName) {
    document.querySelector('.car-name h1').innerText = carName;
  }
};