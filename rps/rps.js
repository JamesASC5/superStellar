
const arg3 = process.argv[2];
const arg4 = process.argv[3];
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