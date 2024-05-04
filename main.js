
// LOGIN - user login - will show an account icon in the top right corner of the page

const loginButton = document.getElementById("loginForm");
loginButton.addEventListener('submit', function(e) {
  e.preventDefault();
  submitLogin();
})

function submitLogin(){
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  window.location.replace("calendar.html");
}


// general functions


// logout - will remove the account icon from the top right corner of the page
// want to click on icon, menu dropdown, and log out


