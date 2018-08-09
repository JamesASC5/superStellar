const video = document.querySelector("video");
const button = document.getElementById("button");
const canvas = document.querySelector("canvas");
const gary = document.querySelector("gray");
const blur = document.getElementById("blur");
const contrast = document.getElementById("contrast");
button.addEventListener("click",snapshot);
gray.addEventListener("click",grayImage);
blur.addEventListener("click",blurImage);
contrast.addEventListener("click",contrastImage);


canvas.width = 640;
canvas.height = 480;

function snapshot(){
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    ctx.font = "70px Comic Snas MS" ;
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("", canvas.width/2, canvas.height/2);
}
const constraints = {
    audio: false,
    video: true
}
function handelSuccess(stream){
video.srcObject = stream;
window.stream = stream;
}
if(navigator.mediaDevices){
navigator.mediaDevices.getUserMedia(constraints).then(handelSuccess);
}else {
alert("oieoeigeojgie");
}
function grayImage(){
    video.style.filter = "grayscale(100%)";
    canvas.style.filter = "grayscale(100%)";
}
function blurImage(){
    video.style.filter = "brightness(200%)";
    canvas.style.filter = "brightness(200%)";
}
function contrastImage(){
    video.style.filter = "contrast(200%)"
    canvas.style.filter = "contrast(200%)"
}