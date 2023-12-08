['.catalog-1', '.catalog-2'].forEach(function(catalogClass) {
  document.querySelector(catalogClass + ' .btn-rental button').addEventListener('click', function() {
    var carName = document.querySelector(catalogClass + ' .car-name h4').innerText;
    localStorage.setItem('selectedCarName', carName);
  });
});