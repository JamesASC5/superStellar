
const number_of_boxes_in_row = 20;
const number_of_boxes_in_column = 10;

let box_width, box_height;
let color = "blue"
let hList = ["Hit"]
const word = "You have sunken a ship"

function setup(){
createCanvas(600,600);
box_height = 60;
box_width = 60;




}

const guesses = [];
const ships = [
    [0, 3],
    [0, 4],
    [0, 2],
    [0, 1],
    [1, 7],
    [2, 7],
    [3, 7],
    [4, 7],
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9]
];

function draw(){
    for(let i = 0; i < number_of_boxes_in_row ; i++){
        const x = i * box_width;
        
        for (let j = 0; j < number_of_boxes_in_column; j++){
            const y = j * box_height;

            if(mouseIsPressed){
                if(mouseInside(x, y, box_width,box_height)) {
                    guesses.push([i , j]);
                }
            }

            fill(color);
            rect(x,y,box_width,box_height);
        }
    }

    for (const guess of guesses) {
        let guessColor = "white";

        for (const ship of ships) {
            if (guess[0] === ship[0] && guess[1] === ship[1]) {
                guessColor = "red";  
                
            }
            
    
           
            
        }
        const x = guess[0] * box_width;
        const y = guess[1] * box_height;
        fill(guessColor)
        rect(x,y,box_width,box_height)
    }
}

 
const customFill = function(i,y){
    const j = y/box_height;
    fill(255/number_of_boxes_in_row * (i+1), 100, 255/number_of_boxes_in_column * (j+1) );
}
function mouseInside(x,y,width,height) {
    if(mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height){
        return true
    } else {
        return false
    }
   
 } 




 // function drawEnemy(){
//     const x = enemy[0];
//     const y = enemy[1];
//     fill("orange");
//     rect(325,325,60,60);
// }
// function drawBullet(){
//     const x = bullet[0];
//     const y = bullet[1];
//     fill("blue");
//     ellipse(x,y,bulletsize);
// }
// function moveBullet(){
//     const collision = checkForCollision();
//     if(collision){
//         console.log("HIT")
//         bullet[1] = height;
//     }else {
//         bullet[1] -= bulletSpeed
//     }
// }
// function checkForCollision(){
//     const enemyx = enemy[0];
//     const enemyy = enemy[1];
//     const bulletx = bullet[0];
//     const bullety = bullet[1];
//     const distance = dist(enemyx,enemyy,bulletx,bullety);
//     const enemyRadius = enemySize/2;
//     const bullerRadius = bulletsize/2

//     return distance <= (enemyRadius + bulletRadius)
// }


 
 



 

//  function mouseClicked(){
//     if (mouseInside(0,0,60,60)){
//         changeColor()
//     } else if(mouseInside(0,60,60,60)){
//         changeColor()
//     } else if(mouseInside(0,120,60,60)){
//         changeColor()
//     } else if(mouseInside(0,180,60,60)){
//         changeColor()
//     } else {
//         color = "white";
//     }
//  } 




