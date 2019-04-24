function setup(){
    createCanvas(600,600);
    background(100);
    
    
}
let x = Math.random()*500;
let y = Math.random()*500;
let vx = 7;
let vy = 7;
let a1 = 1.02
function draw(){
    const colors = ["red", "blue", "green","purple", "yellow", "orange", "violet"]
    background(100);
    ellipse(x,y,50);
    ellipse(x + 125,y + 125, 50);
    x += vx;
    y += vy;
        if(y >= 600){
            vy = -vy * a1;
        }
    else if(y <= 0){
        vy =-vy * a1 ;
    }
else if(x >= 600){
    vx = -vx * a1;
} else if(x <= 0){
    vx = -vx * a1;
}
}
function mouseClicked(){
        const colors1 = ["red", "blue", "green", "purple", "yellow", "orange","violet"]
        fill(random(colors1));
    
}