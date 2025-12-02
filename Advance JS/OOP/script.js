//Day-1 Basics of OOP

//objects
let profile1 = {
    name: "Vipul",
    age: 21,
    email: "vkt@gmail.com"
}

let profile2 = {
    name: "Yash",
    age: 22,
    email: "yash@gmail.com"
}




//class - blueprint
class User {
    constructor() {
        this.username = "vipul";
        this.age = 21;
        this.email = "vkt@gmail.com"
    }
    khanakhao() { }
}

let user1 = new User();


class Kitaab {
    constructor(name, price, author, color) {
        this.name = name;
        this.price = price;
        this.author = author;
        this.color = color;
    }

    pannaPalto() { }
    bookmarkLagao() { }
    padhlo() { }
}

let k1 = new Kitaab("science", 120, "Yash", "yellow");
let k2 = new Kitaab("physics", 100, "PK Sharma", "black");





//Prototype - shared memory
class Human {
    constructor() {
        this.username = "vipul";
        this.age = 21;
        this.email = "vkt@gmail.com"
    }
}

Human.prototype.saansLo = function () {
    console.log("Hey!")
}

let h1 = new Human();
let h2 = new Human();