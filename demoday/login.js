// function onClick(){
//     location.href = "file:///C:/Users/ASC%20Student/Documents/demoday/index.html";
// }
const email = document.getElementById("Email");
const password = document.getElementById("password");

const button = document.getElementById("button");
button.addEventListener("click",setUP);

const database = firebase.database();


function setUP(event){

    event.preventDefault();
const email1 = email.value;
const password1 = password.value

 
    email.value = "";
    password.value = "";
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
 });
 
    
 
 
 //Update database here
//  const value = {
//     EMAIL: email1,
//     PASSWORD: password1
    
//  }
 database.ref(email + "," + password).set(value);
 
}

