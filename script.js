$(document).ready(function () {
  $('#loginForm').submit(function (event) {
    event.preventDefault();
    // Get the values from the form
    var email = $('#email').val();
    var password = $('#password').val();
    // Correct values
    var correctEmail = 'lucasanakin@tatooine.com';
    var correctPassword = 'twinsuns';
    var goToLink = 'https://www.figma.com/proto/ZablHvbDAogZh2S4HHvBO3/Project-6-%7C-invenTAI?page-id=1%3A3&type=design&node-id=493-6201&viewport=-2754%2C677%2C0.14&t=uXFOtO32xmrXYhwb-1&scaling=scale-down&starting-point-node-id=493%3A6201&show-proto-sidebar=1&mode=design';

    if (email === correctEmail && password === correctPassword) {
      window.location.href = goToLink;
    }
    else {
      $('#errorMessage').text('Incorrect username or password. Please try again.');
      setTimeout(() => $('#errorMessage').text("") , 3000);
    }
  });
});