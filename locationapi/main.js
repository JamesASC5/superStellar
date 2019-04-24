const button = document.querySelector("button");
const demo = document.getElementById("demo");

button.addEventListener("click", getposition);

function getposition(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        demo.innerText = "no location";
    }
}

function showPosition(position){
    demo.innerText = position.coords.latitude + " , " + position.coords.longitude;
}
