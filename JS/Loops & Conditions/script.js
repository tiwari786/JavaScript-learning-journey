//Q1. even odd using loop

//simple
// for (let i = 1; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i, "Even")
//     } else {
//         console.log(i, "Odd")
//     }
// }

//more simple
// for (let i = 2; i < 21; i += 2) {
//     console.log(i)
// }


// Q2. Print numbers from 10 to 1 reverse loop with a decrement
// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }


// Q3. Print the word "Yes" 5 times repeat  using a loop
// for (let i = 1; i < 6; i++) {
//     console.log("Yes")
// }


// Q4. ask user or a number and say if it's is positive or negative
// use Prompt() and a conditional.
// let num = +prompt("Enter  a number") //we can use parseInt, Number also for convert string into number

// if (num >= 0) {
//     console.log("Positive number -", num)
// }else {
//     console.log("Negative number -", num)
// }




// handle prompt

// let age = prompt("Enter age");
// if (age === null) {
//     console.log("u canceled it")
// } else {
//     if (age.trim() === "") {
//         console.log("invalid")
//     } else {
//         age = Number(age.trim());
//         if (isNaN(age)) {
//             console.log("Please provide number");
//         } else {
//             console.log("it's Number")
//         }
//     }
// }


// Q5.  Print multiplication table of 5. (Use loop to print 5 × 1 to 5 × 10)

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     mul = num * i
//     console.log(mul)
// }


// Q5. Count how many numbers between 1 and 15 are greater than 8. (Loop and count conditionally)

// let count = 0
// for (let i = 1; i <= 15; i++) {
//     if (i > 8) {
//         count++
//     }
// }
// console.log(count)

