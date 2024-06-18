/*
CLASSES AND OBJECTS.!
const student = {
    fullName : "isha moghe",
    marks : 80.2,
    printMarks : function() {
        console.log("marks =", marks);
    },
};*/



/*const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
    
};

const newEmpl = {
    salary: 50000,
};

newEmpl.__proto__ = employee;*/


/*class Patient {
    constructor(age) {
        console.log("creating new object");
        this.age = age;
    }
    measure() {
        console.log("select measure");
    }
    allowableGap() {
        console.log("there is no gap allowed");
    }
    
}

let obj = new Patient(22);
let obj2 = new Patient(16);*/

//inheritance example
let dataa = "confidential";
class User {
    
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data = ", dataa);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        dataa = "new value";
        console.log("data = ", dataa);
    }
}

let epmloyee1 = new User("isha", "abc@gmail.com");
let epmloyee2 = new User("atharv", "xyz@gmail.com");
let admin1 = new Admin("admin", "admin@office.com");