const password = "bXJib25lczEw";
let passwordInput;
window.onload = () => {
  passwordInput = document.getElementById('password');
}
function login() {
  let encode = btoa(passwordInput.value)
  if(encode == password) {
    localStorage.setItem("profile-auth", encode);
    location.replace("/browse/");
  } else {
    passwordInput.value = "";
    alert("Oof: you didn't type the correct password")
  }
}