const groupname = document.getElementById("groupname");
const lOcation = document.getElementById("location");
const contact = document.getElementById("contact");
const discription = document.getElementById("discritption");

const submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click",updateDB);

const database = firebase.database();


function updateDB(event){

    event.preventDefault();
const GroupName = groupname.value;
const L = lOcation.value;
const Contact = contact.value;
const Discription = discription.value;

 
    groupname.value = "";
    lOcation.value = "";
    contact.value = "";
    discription.value = "";
 
    
 
 
 //Update database here
 const value = {
    GROUPNAME: GroupName,
    LOCATION: L,
    CONTACT: Contact,
    DISCRIPTION: Discription,
    
 }
 database.ref( GroupName + "," + L + "," + Contact + "," + Discription).set(value); 
 
 
 }
 