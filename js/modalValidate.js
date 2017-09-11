var usrName = document.getElementById("usr").value;
var emailId = document.getElementById("email").value;
var comment = document.getElementById("comment").value;

var formToSubmit = {};

function validateForm(){
  if(validateEmail() && validateName()){
    submitForm();
  }
  else{
    alert("Please enter coorect details");
  }
}

function validateEmail(){
  emailId = document.getElementById("email").value;
  emailId = emailId.split(" ");
  emailId = emailId[0];
  var regex = new RegExp("[a-zA-Z0-9]+((.|_|)[a-zA-Z0-9]+)@[a-z]+.com");
  if(regex.test(emailId) && emailId != null) {
    alert("Valid Email");
    return true;
  }
  alert("Please enter a valid email");
  return false;
}

function validateName(){
  usrName = document.getElementById("usr").value;
  var regex = new RegExp("[a-zA-Z ]+");
  if(regex.test(usrName) && usrName != null) {
    alert("Valid name");
    return true;
  }
  alert("Please enter a valid name");
  return false;
}

function submitForm(){

  if(!validateEmail() || !validateName()){
    return;
  }
  usrName = document.getElementById("usr").value;
  emailId = document.getElementById("email").value;
  comment = document.getElementById("comment").value;
  formToSubmit = {
    "user-name": usrName,
    "mailId": emailId,
    "comment": comment,
    "submission-time": "",
  };
  window.formToSubmit = formToSubmit;

  clearForm();

  alert("Form submitted");
}

function clearForm() {
  document.getElementById("usr").value = "";
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";
}