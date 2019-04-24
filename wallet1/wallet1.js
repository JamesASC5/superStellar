const arg1 = process.argv[0];
const arg2 = process.argv[1];
const arg3 = process.argv[2];
const arg4 = process.argv[3];
const arg5 = process.argv[4];


// let hoursofsleep = process.argv[2];

// if(hoursofsleep >= 8){
//     console.log("you've got plenty of energy");
// }else if(hoursofsleep >= 5){
//     console.log("You feel good");
// }else if(hoursofsleep >= 3){
//     console.log("you're tired");
// }else{
//     console.log("You're so tired you go back to sleep")
// }

// hourspentgaming = 3;

// if(hourspentgaming >= 7){
//     console.log("The system overheats");
// }else if(hourspentgaming >= 5){
//     console.log("system at 90 degrees farenhight");
// }else if(hourspentgaming >= 1){
//     console.log("system at normal tempertautre");
// }else if (hourspentgaming = 0){
//     console.log("system is off");
// }

// let input = process.argv[2];

// if(input == "n" || input == "b"){
//     console.log("interact");
// }else if(input = "w"){
//     console.log("movefoward");
// }else if(input = "s")}
//     console.log("moveback");}
// }else if(input = "d")
//     console.log("moveright");
// }else if(input = "a"){
//     console.log("moveleft");
// }

let name1 = arg3;
let name2 = arg4;
 

if (name1 == "r" && name2 == "s"){
    console.log("playerone wins");
}else if(name1 == "s" && name2 == "p"){
    console.log("playerone wins");
}else if(name1 == "p" && name2 == "r"){
    console.log("playerone wins");
}else if(name1 == "r" && name2 == "p"){
    console.log("playertwo wins");
}else if(name1 == "s" && name2 == "r"){
    console.log("playertwo wins");
}else if(name1 == "p" && name2 == "s"){
    console.log("playertwo wins");
}else if(name1 == "r" && name2 == "r"){
    console.log("tie");
}else if(name1 == "p" && name2 == "p"){
    console.log("tie");
}else if(name1 == "s" && name2 == "s"){
    console.log("tie");
}
    
   
