function setup(){
    createCanvas(1200,600);
    background("white"); 
 }
 
 let color = "blue";
 let color1 = "red"
 
 function draw(){
    fill(color1);
    rect(0,0,600,300);
    fill(color);
    rect(0,300,600,600);
    fill(color);
    rect(600,0,600,300);
    fill(color1);
    rect(600,300,600,600);
 } function changeColor(){
    if(color === "blue"){
        color = "red";
    }else if(color1 === "red"){
        color1 = "blue"
    }else if(color === "red"){
        color = "blue"
    }else if(color1 === "blue"){
        color1 = "red";
    }
 }
 

 function clickedInside(x,y,width,height) {
    if(mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height){
        return true
    } else {
        return false
    }
 }
 
 function mouseClicked(){
     if (clickedInside(0,0,600,300)){
         changeColor()
     } else if(clickedInside(0,300,600,600)){
         changeColor()
     } else if(clickedInside(600,0,600,300)){
         changeColor()
     } else if(clickedInside(600,300,600,600)){
         changeColor()
     }


 }
 
function keyReleased(){
    mouseClicked();
}





