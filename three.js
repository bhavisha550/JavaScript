/*
//avg marks
let marks = [85, 97, 44, 37, 76, 60];
//console.log(marks);
//console.log(marks.length); //property
let sum = 0;
for (let mark of marks) {
    sum = sum+mark;
}

let avg = sum/marks.length;
console.log(avg);
*/

let prices = [250, 645, 300, 900, 50];
/*let indx = 0;    //for of loop
 for(let price of prices) {      
     console.log(`value at index ${indx} = ${price}`);
     let offer = price/10;
     prices[indx] = prices[indx] - offer;
     console.log(`value after offer = ${prices[indx]}`);
     indx++;
}*/

for(let i = 0; i<prices.length; i++)  //for loop
{
    let offer = prices[i] / 10;
    prices[i] = prices[i] - offer;
    console.log(prices[i]);
}



