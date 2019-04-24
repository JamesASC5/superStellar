const firstnameElement = document.getElementById("firstname");
const lastnameElement = document.getElementById("lastname");
const dateElement = document.getElementById("date");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();


/**
* Updates the database with the username and message.
*/
function updateDB(event){
   event.preventDefault();
   const firstname        = firstnameElement.value;
   const lastname        = lastnameElement.value;
   const date            = dateElement.value;
   const message         = messageElement.value;

   firstnameElement.value = "";
   lastnameElement.value = "";
   dateElement.value = "";
   messageElement.value  = "";

   console.log(firstname + " : " + lastname + " : " + date + " : " + message);

   //Update database here
const value = {
   FIRSTNAME: firstname,
   LASTNAME: lastname,
   DATE: date,
   MESSAGE: message
}
database.push(value);
}
function updateUI(data){
    const allMessagesDiv = document.getElementById('allMessages');
    const messageDiv = document.createElement('p');
    messageDiv.innerText = data.FIRSTNAME + " : " + data.LASTNAME + " : " + data.DATE + " : " + data.MESSAGE;
    allMessagesDiv.appendChild(messageDiv);
 }
 // Set database "child_added" event listener here
 database.on("child_added", function(dataRef){
    const data = dataRef.val();
    updateUI(data);
 });