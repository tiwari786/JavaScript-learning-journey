// SetTimeout 
var btn = document.querySelector("button")
var h1 = document.querySelector("h1")

btn.addEventListener("click", function () {
    h1.innerHTML = "Changing user..."
    setTimeout(function () {
        h1.innerHTML = "Hello Tiwari Welcome!"
    }, 2000)
})


// setInterval
var a = 0

var int = setInterval(function () {
    a++
    console.log(a)
}, 100)

setTimeout(() => {
    clearInterval(int)
}, 5000);