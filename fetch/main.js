
const url = "https://randomuser.me/api?results=5";
let data;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    const myPara = document.querySelector("#email");
    let useremail = data.results[0].email;
    myPara.innerText = useremail;
  });
  console.log(data);