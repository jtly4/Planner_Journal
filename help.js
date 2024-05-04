// HELP - send message 

const sendButton = document.getElementByClass("loginForm");
loginButton.addEventListener('submit', function(e) {
  e.preventDefault();
  submitLogin();
})

function submitLogin(){
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  window.location.replace("calendar.html");
}