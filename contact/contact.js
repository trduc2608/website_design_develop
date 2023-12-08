function checkInformation() {
  // Check if all required information is filled
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone-number").value;
  var massage = document.getElementById("message").value;
  if (
    !firstName || !lastName || !email ||!phone || !massage
  ) {
    // Display the notification
    alert("Please fill in all the required information.");
  } else {
    alert("Thanks for letting us know your experience");
  }
}
