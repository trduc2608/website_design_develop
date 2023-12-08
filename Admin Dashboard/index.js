document.querySelectorAll('.btn-change button').forEach(function(button) {
    button.addEventListener('click', function() {
      var parentDiv = button.parentElement.parentElement;
      var title = parentDiv.querySelector('h2').innerText;
      var oldValue = parentDiv.querySelector('p').innerText;
      if (title.toLowerCase() === 'password') {
        var oldPassword = prompt('Enter old password:');
        if (oldPassword !== oldValue) {
          alert('Incorrect old password!');
          return;
        }
      }
      var newValue = prompt('Enter new ' + title.toLowerCase() + ':', oldValue);
      if (newValue !== null && newValue !== oldValue) {
        parentDiv.querySelector('p').innerText = newValue;
      }
    });
  });

  document.querySelector('.btn-delete button').addEventListener('click', function() {
    var confirmed = confirm('Are you sure you want to permanently delete your account, posts, and comments?');
    if (confirmed) {
      // Add your deletion logic here
      window.location.href = '../Modern-Login-master/login.html';
    }
  });
  