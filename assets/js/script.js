let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

function validateForm() {
  let flag;
  if (username.value == "") {
    document.getElementById("errorUser").innerHTML = " Username is empty";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("errorUser").innerHTML =
      " Username must be at least 3 characters";
    flag = 0;
  } else {
    document.getElementById("errorUser").innerHTML = " ";
    flag = 1;
  }
  if (email.value == "") {
    document.getElementById("errorEmail").innerHTML = " Email is empty";
    flag = 0;
  }  else {
    document.getElementById("errorEmail").innerHTML = " ";
    flag = 1;
  }
  if (password.value == "") {
    document.getElementById("errorPassword").innerHTML = " Password is empty";
    flag = 0;
  } else {
    document.getElementById("errorPassword").innerHTML = " ";
    flag = 1;
  }

  if(flag == 1){
    return true;
  }else{
    return false;
  }
}
