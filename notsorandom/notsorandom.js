function randomInt(endRange){
    const randomdecimal = Math.random() * endRange;
    const randomInteger = Math.ceil(randomdecimal);
    return(randomInteger);
}
const r = randomInt(400);
console.log(r);


function randomAlphabet(str){
   const randomlet = Math.ceil(str.length);
   const randomChar = str[randomlet];
    return(str[0]);
}
const x = randomAlphabet("a");
console.log(x);