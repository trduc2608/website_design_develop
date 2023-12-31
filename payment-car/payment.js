function checkInformation() {
  // Check if all required information is filled
  var name = document.getElementById("name").value;
  var phoneNumber = document.getElementById("phone-number").value;
  var address = document.getElementById("address").value;
  var townCity = document.getElementById("town-city").value;
  var location = document.getElementById("locations").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var cardNumber = document.getElementById("card-number").value;
  var expirationDate = document.getElementById("expration-date").value;
  var cardHolder = document.getElementById("card-holder").value;
  var cvc = document.getElementById("cvc").value;
  var agreementCheckbox = document.getElementById("agreement");
  var privacyCheckbox = document.getElementById("privacy");
  if (
    !name ||
    !phoneNumber ||
    !address ||
    !townCity ||
    !location ||
    !date ||
    !time ||
    !cardNumber ||
    !cardHolder ||
    !cvc ||
    !expirationDate ||
    !agreementCheckbox.checked ||
    !privacyCheckbox.checked
  ) {
    // Display the notification
    alert("Please fill in all the required information.");
  } else {
    alert("Success");
  }
}

window.onload = function () {
  var carName = localStorage.getItem('selectedCarName');
  if (carName) {
    document.querySelector('.car-name h1').innerText = carName;
  }
  var priceCar = localStorage.getItem("selectedPriceCar");
  if (priceCar) {
    var subtotalElement = document.querySelector(".subtotal h5");
    var totoalPriceCar = document.querySelector(".total-price h2");
    if (subtotalElement) {
      subtotalElement.innerText = priceCar;
      totoalPriceCar.innerText = priceCar;
    }
  }
};
