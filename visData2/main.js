const url = "https://randomuser.me/api?results=50";
let data;
const number = Math.floor(Math.random() * 10 * 5); 
const number1 = Math.floor(Math.random() * 10 * 5); 
const number2 = Math.floor(Math.random() * 10 * 5); 
const number3 = Math.floor(Math.random() * 10 * 5); 

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
   

let firstname = data.results[number].name.first;
let lastname = data.results[number].name.last;
let fullname = document.querySelector("#name");
fullname.innerText = `${firstname} ${lastname}`;

personImg = data.results[number].picture.large;
photo.src =  personImg;

let gender = data.results[number].gender;
let malefemale = document.querySelector("#gender");
malefemale.innerText = gender;

let firstname1 = data.results[number1].name.first;
let lastname1 = data.results[number1].name.last;
let fullname1 = document.querySelector("#name1");
fullname1.innerText = `${firstname1} ${lastname1}`;

personImg = data.results[number1].picture.large;
photo1.src =  personImg;

let gender1 = data.results[number1].gender;
let malefemale1 = document.querySelector("#gender1");
malefemale1.innerText = gender1;

let firstname2 = data.results[number2].name.first;
let lastname2 = data.results[number2].name.last;
let fullname2 = document.querySelector("#name2");
fullname2.innerText = `${firstname2} ${lastname2}`;

personImg = data.results[number2].picture.large;
photo2.src =  personImg;

let gender2 = data.results[number2].gender;
let malefemale2 = document.querySelector("#gender2");
malefemale2.innerText = gender2;

let firstname3 = data.results[number3].name.first;
let lastname3 = data.results[number3].name.last;
let fullname3 = document.querySelector("#name3");
fullname3.innerText = `${firstname3} ${lastname3}`;

personImg = data.results[number3].picture.large;
photo3.src =  personImg;

let gender3 = data.results[number2].gender;
let malefemale3 = document.querySelector("#gender3");
malefemale3.innerText = gender3;

  });
  console.log(data);

    
function onClick(){
    s = document.querySelector(".name")
    s.parentNode.removeChild(s);
}
function onClick1(){
    p = document.querySelector(".user_photo");
    p.parentNode.removeChild(p);
}
function onClick2(){
    x = document.querySelector(".p1");
    x.parentNode.removeChild(x);
}
    
