/*for(let i = 1; i<=5; i++) {
    console.log("hey isha!!")
}

let str = "Isha Moghe"

for(let i of str) {  //for of loop
    console.log("i=", i);
}

let student = {
    name: "Sumit Sharma",
    age: 22,
    cgpa: 6.4,
    isPass: true,
};
for(let key in student) {  //for in loop...returns key!
    console.log("key=", key, " value=", student[key]);
}*/

/*let gameNum = 25;

let userNum = prompt("guess the game number: ");
// console.log(userNum);
while(userNum != gameNum) {

    userNum = prompt("sorry:( wrong guess!!..guess again!: ");
}

console.log("congratsss!!!!...you entered the correct num");*/

//template strings
/*let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;  //template literals!
console.log(output);*/

let fullName = prompt("enter your full name without spaces: ");
let userName = '@'+ fullName + fullName.length;
console.log(userName);
