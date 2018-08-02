const number = Math.floor(Math.random() * 10); 

let firstname = data.results[number].name.first;
let lastname = data.results[number].name.last;
let fullname = document.querySelector("#name");
fullname.innerText = `${firstname} ${lastname}`;

let picture = data.results[number].picture.large;
let pic = document.querySelector("#photo");
pic.src = picture;

let dob = data.results[number].dob.date;
let dateofbirth = document.querySelector("#dob");
dateofbirth.innerText += dob;

let email = data.results[number].email
let e = document.querySelector("#useremail");
e.innerText +=  email;

let state = data.results[number].location.state;
let s = document.querySelector("#state");
s.innerText += state;


let city = data.results[number].location.city;
let c = document.querySelector("#city");
c.innerText +=  city;

let phone = data.results[number].phone;
let p = document.querySelector("#phone");
p.innerText += phone;