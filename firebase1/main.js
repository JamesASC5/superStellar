const firstnameElement = document.getElementById("firstname");
const savecodeElement = document.getElementById("numberSave");
const random = "https://dog.ceo/api/breeds/image/random";
const sbutton = document.getElementById("saveButton");
const obutton = document.getElementById("Openbutton");
const rbutton = document.getElementById("randomuser");
const p = document.getElementById("image");
let data;
sbutton.addEventListener("click",updateDB);
obutton.addEventListener("click",openDB);
rbutton.addEventListener("click",randomuserDB);

fetch(random).then(function(response){
    return response.json();
}).then(function(json){
    const url = json.message;
    p.src =  url;

});


//Set database object here
const database = firebase.database();



/**
* Updates the database with the username and message.
*/

//Retirve the data
function openDB(){
    const savecode           = savecodeElement.value;
    database.ref('cats' + savecode).once('value').then(function(snapshot) {
        if (snapshot.exists()) {
            const url = snapshot.val()["catUrl"];
            console.log(url);
            p.src = url;
        }
    });
}

//Sends the data
function updateDB(event){

   event.preventDefault();
   const savecode           = savecodeElement.value;
   const photo              = p.src;
//    const firstname        = firstnameElement.value;
//    const url        = imageElement.value;

   savecodeElement.value = "";

   


//Update database here
const value = {
//    USERNAME: firstname,
//    image: url,
   catUrl: photo

}
database.ref("cats" + savecode).set(value); 


}

//Gets a random user
function randomuserDB(){
    p.src = random
}





// function updateUI(data){
//     const allMessagesDiv = document.getElementById('allMessages');
//     const messageDiv = document.createElement('p');
//     messageDiv.innerText = data.FIRSTNAME + " : " + data.LASTNAME + " : " + data.DATE + " : " + data.MESSAGE;
//     allMessagesDiv.appendChild(messageDiv);
//  }
//  // Set database "child_added" event listener here
//  database.on("child_added", function(dataRef){
//      data = dataRef.val();
    
//  });
 