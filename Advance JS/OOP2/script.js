// call()
// let obj = {
//     name: "Vipul",
// };

// function abcd() {
//     console.log(this)
// }

// abcd.call(obj)



// apply()
// let obj = { name: "Vipul" };

// function abcd(a, b, c) {
//     console.log(this, a, b, c)
// }

// abcd.apply(obj, [1, 2, 3])



// bind()
// let obj = { name: "Vipul" }

// function abcd(a,b,c) {
//     console.log(this, a,b,c)
// }
// let newfnc = abcd.bind(obj, 1, 2, 3)
// newfnc()