// SIGN UP - creates account - will show an account icon in the top right corner of the page

const createButton = document.getElementById("signupForm");
createButton.addEventListener('submit', function(e) {
    e.preventDefault();
    submitSignup();
})
  
function submitSignup(){
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordConfirm").value = "";
    window.location.replace("calendar.html");
}
