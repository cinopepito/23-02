function checkPassword() {
  let password = document.getElementById("passwordBox");
  let passwordEntered = password.value;
  if (passwordEntered == "cino") {
    return true;
  } else {
    return false;
  }
}
console.log("hello");
