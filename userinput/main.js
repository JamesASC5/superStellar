const button = document.getElementById("submitButton");
button.addEventListener("click", clickListener);

function clickListener(event){
    event.preventDefault();
    const inputElement = document.getElementById("username");
    const userInput = inputElement.value;
    alert(userInput);
    inputElement.value= "";
}