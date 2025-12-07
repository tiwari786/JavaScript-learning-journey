// Q1. even or odd 
// let num = Number(prompt("Enter a number"));
// if (num % 2 === 0) {
//     console.log(num, "even")
// } else {
//     console.log(num, "odd")
// }

// Q2. Find factorial
// let num = Number(prompt("Enter a number"));
// let fact = 1

// for (let i = num; i > 1; i--) {
//     fact = fact * i
// }
// console.log(fact)


// Q3. A = 2, B = 3 Swap without 3rd variable 
// let a = 10;
// let b = 3;

// [a, b] = [b, a]

// console.log(`a = ${a}, b = ${b}`)



// Q5. Print table of 5 
// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`)
// }



// Q6. A = 12, B = 14, C = 10 Accessing order me print kro 

// using sort method
// let a = 12;
// let b = 14;
// let c = 10;

// let values = [a, b, c]
// values.sort((a, b) => a - b)
// console.log(values)



// Q7. find max or min number in array
// let arr = [10, 7, 5, 10, 72, 51, 14, 32, 100];
// let max = arr[0]
// let min = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     } else if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(`max - ${max}, min - ${min}`)



// Q8. print 10 numbers in array
// let arr = [10, 7, 5, 10, 72, 51, 14, 32];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// Q9. let array = [10,2,3,4,5,6,7,12,32] Ko Accending order me krna hai without using sort method
// let arr = [10, 2, 3, 4, 5, 6, 7, 12, 32];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i]; //10
//             arr[i] = arr[j] //2
//             arr[j] = temp; //10
//         }
//     }
// }
// console.log(arr)



// Q10. [1,2,3,4,4,4,5,6,4,6,7] double number remove krna tha and new array print

// let arr = [1, 2, 3, 4, 4, 4, 5, 6, 4, 6, 7]
// let newArray = [...new Set(arr)]
// console.log(newArray)

// Q11. Array= 10,50,62,73,6  => Sorting without use inbuilt function or extra variable
// let arr = [10,50,62,73,6];

// for(let i = 0; i<arr.length; i++){
//     for(let j=i+1; i<arr.length; j++){
//         if(arr[i]> arr[j]){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
// }
// console.log(arr)


// Q12. String = "Vipul" me se vowels find kro

// let str = "Vipul Kumar Tiwari";
// let vowels = "aeiouAEIOU";
// let count = 0

// for(let i= 0; i<str.length; i++){
//     if(vowels.includes(str[i])){
//         count++
//       // console.log(str[i])
//     }
// }
// console.log("Total vowels:", count);


// Q13. Array me se duplicate number
// let arr = [72,11,22,1,2,3,2,1,2,3,4,2,1,5,2,9]

// let newArray = [...new Set(arr)]
// console.log(newArray)


// Q14. Fibonacci Series
// function fib(n){
//     if(n<2) return n;
//     return fib(n-1)+ fib(n-2)
// }
// console.log(fib(6))


// Q15. string palindrome 
// const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split("").reverse().join("")

// console.log(isPalindrome("madam")) //true