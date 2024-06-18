//callbacks....promises...async await.!
// function hello() {
//     console.log("hey after 5sec");
// }
/*console.log("1");
console.log("2");

setTimeout(() => {
    console.log("hey after 5sec");
}, 5000);

console.log("3");
console.log("4");*/

/*function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 4, sum);*/

//nesting

/*let age = 25; 
if(age>=18) {
    console.log("adult");
    if(age>=60){
        console.log("also senior");
    }
    else {
        console.log("just mid aged");
    }
    
}
else {
    console.log("not adult");
}*/

/*7
//callback hell
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}*/


/*//callback hell....nested callbacks.!.....solution=promises.!
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4)
        });
    });
});*/


//promises.!
/*let promise = new Promise((resolve, reject) => {
    console.log("i am a promise");
    
    reject("error occured");
});*/

/*function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData) {
                getNextData();
            }
        }, 5000);
    });
}*/


/*const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am a promise");
        resolve("success.");
        //reject("error.!");
    });
};
let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled.", res);
});

promise.catch((err) => {
    console.log("promise failed.", err);
});*/


//Promise Chain.!
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success1.!");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success2.!");
        }, 4000);
    });
}

console.log("fetching data1");

/*let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2");
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    })
})*/

asyncFunc1().then((res) => {
    console.log("fetching data2");
    asyncFunc2().then((res) => {});
});


