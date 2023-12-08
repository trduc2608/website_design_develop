['.catalog-1', '.catalog-2', '.catalog-3', '.catalog-4'].forEach(function(catalogClass) {
  document.querySelector(catalogClass + ' .btn-rental button').addEventListener('click', function() {
    var carName = document.querySelector(catalogClass + ' .car-name h4').innerText;
    var priceCar = document.querySelector(catalogClass + ' .price p').innerText;
    localStorage.setItem('selectedCarName', carName);
    localStorage.setItem('selectedPriceCar', priceCar);
  });
});