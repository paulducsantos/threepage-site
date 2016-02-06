$(document).ready(function() {
  $('#registerForm').on('submit', function(e) {
    if($('#email').val() === '') {
      alert('Type your email');
      return false;
    } else if($('#password').val() === '') {
      alert('Type a password');
      return false;
    } else if($('#password').val() != $('#retypePassword').val()) {
      alert('Your password does not match');
      return false;
    } else {
      return true;
    }
  });
});