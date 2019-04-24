function setup(){
    createCanvas(1400, 1000);
// }
// let value = 0;
// function draw(){
//     fill("red");
//     rect(56, 46, 55, 55);
//     fill("blue");
//     rect(156, 46, 55, 55);
//     fill("green");
//     rect(256, 46, 55, 55);
// }
// function mouseClicked(){
//     if (value === 0);{
//         value = 255;
//     } else if(value != 0);{
//         value = 0
//     }
// } 
// function mouseClicked() {
//     ellipse(mpuseX, mouseY, 5, 5);
//     return false;
// }
    





}
let value = 0
function mousedragged(){
        fill(value);
        rect(25, 25, 50, 50);
    }

function mouseDragged1(){
    value = value + 5;
    if (value > 255){
        value = 0
    }
} function mouseClicked(){
    const colors1 = ["red", "blue", "green", "purple", "yellow", "orange","violet"]
    background(random(colors1));
}
// Random shape and color drawing
function mouseMoved(){
    const shapes = ["circle", "rectangle", "triangle"]
    let i = random(shapes)
    if (i === shapes[0]){
        ellipse(mouseX, mouseY, random()*100, random()*100);
    } else if(i === shapes[1]){
        rect(mouseX, mouseY, random()*100, random()*100);
    } else {
        let r = random(0,50);
        let b = random(0,50);
        let g = random(0, 50);
        triangle(mouseX - r, mouseY + b, mouseX + g, mouseY - g, mouseX + r, mouseY + b)
    }
    const colors = ["red", "blue", "green","purple", "yellow", "orange", "violet"]
    fill(random(colors));
    return false;
} 

    
    
        
    
