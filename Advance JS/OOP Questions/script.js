//Q1. create a user object that stores name and email and has a login method wich prints "User logged in"
let user = {
    name: "Vipul",
    email: "vipultiwari479@gmail.com",
    login: function () {
        console.log("User logged in");
    },
};

user.login();

// Q2. Imagine you now have 5 users
// first, think how you would manage them without using a class
// Then convert the same logic using a class and oberver how the code becomes cleaner. write code for both approaches
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    loggedIn() {
        console.log("LoggedIn")
    }
}

let user1 = new User("Vipul", "vkt@gmail.com")
let user2 = new User("Vipul", "vkt@gmail.com")
let user3 = new User("Vipul", "vkt@gmail.com")
let user4 = new User("Vipul", "vkt@gmail.com")
let user5 = new User("Vipul", "vkt@gmail.com")



// Q3. Create a product object that stores name and price and has a method wich returns the final price after discount.
let product = {
    name: "cap",
    price: 300,
    discountPrice: function () {
        return this.price - 100
    }
}

console.log(product.discountPrice())



// Q4. Create a car class with the following: 
// brand 
// speed
// a drive method that prints the car brand and speed

// class Car {
//     constructor(brnad, speed) {
//         this.brnad = brnad;
//         this.speed = speed;
//     }

//     drive() {
//         return (this.brnad + " - " + this.speed)
//     }
// }

// let car1 = new Car("Hyundai", 180)



// Q5.
// class Car {
//     constructor(brnad, speed) {
//         this.brnad = brnad;
//         this.speed = speed;
//     }

//     drive() {
//         return (this.brnad + " - " + this.speed)
//     }
// }

// let car1 = new Car("Hyundai", 180)
// let car2 = new Car("Maruti", 170)


// Q6. Create a Student class whose constructure accepts name and roll number.
// add a method introduce that prints both values
// class Student {
//     constructor(name, rollNum) {
//         this.name = name;
//         this.rollNum = rollNum;
//     }

//     introduce() {
//         console.log(this.name + " " + this.rollNum)
//     }
// }

// let st1 = new Student("Vipul", 21)