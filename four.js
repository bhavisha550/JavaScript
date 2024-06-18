/*function myFunction(msg) {
    console.log("hey welcome!!");
    console.log("i am javaScript..!!!!!!!!!")
    console.log(msg);
}

myFunction("JS");*/



/*function sum(x, y) {
    s = x+y;
    console.log("before return");
    return s;
    console.log("after return"); //this line wont be printed..!!
}

let val = sum(3, 45);
console.log(val);*/



//arrow function => modern js

/*const arrowMul = (a, b) => {
    console.log(a*b);
}
//console.log(arrowMul);
arrowMul(2, 3);*/

/*function strVowels(st) {
    let v = 0
    for(const i of st) {
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            v++;
        }

    }
    console.log(v);
}

strVowels("isha moghe");*/



/*let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});*/

/*let arr2 = ["delhi", "mumbai", "hyderabad", "banglore"];

arr2.forEach((val) => {
    console.log(val.toUpperCase());
} );*/



/*let arr3 = [2, 6, 3, 8, 5];

arr3.forEach((val) => {
    console.log(val*val);
});*/


/*//map meth
let arr4 = [55, 200, 72, 25, 309];
let newArr = arr4.map((val) => {
    return val+1;
});

console.log(newArr);*/



/*//filter meth
let arr5 = [1, 2, 3, 4, 5, 6, 7];
let newArr1 = arr5.filter((val) => {
    return val % 2 !== 0;
});

console.log(newArr1);*/



/*//reduce meth
let arr6 = [3, 5, 2, 9, 1];
const output = arr6.reduce((res, cur) => {
    //return res > cur ? res : cur;
    return res + cur;

});

console.log(output);*/



/*//marks of students
let marks = [82, 77, 92, 95, 98, 67];
let newArr = marks.filter((val) => {
    return val>90;
});

console.log(newArr);*/



let n = prompt("enter your number: ");
let userArr = [];
for(let i=1; i<=n; i++) {
    userArr [i-1] = i;
}
console.log(userArr);
const output = userArr.reduce((res, cur) => {
    return res*cur;
    //return res+cur;
});
console.log(output);