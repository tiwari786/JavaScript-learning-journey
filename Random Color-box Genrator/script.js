var btn = document.querySelector("button")
var main = document.querySelector("main")

btn.addEventListener("click", function () {
    var div = document.createElement("div")

    div.style.height = "50px"
    div.style.width = "50px"
    div.style.backgroundColor = "red"


    var x = Math.random() * 100
    var y = Math.random() * 100
    var c1 = Math.floor(Math.random() * 256)
    var c2 = Math.floor(Math.random() * 256)
    var c3 = Math.floor(Math.random() * 256)

    div.style.position = "absolute"
    div.style.top = y + '%'
    div.style.left = x + '%'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    main.appendChild(div)
})


//2nd uncomment this or comment uper code

// var btn = document.querySelector("button")
// var main = document.querySelector("main")

// var arr = ["hey", "hello", "hui", "Heyyy", "pasta", "nasta"]

// btn.addEventListener("click", function () {
//     var h1 = document.createElement("h1")

//     var a = Math.floor(Math.random() * arr.length)
//     var x = Math.random() * 80
//     var y = Math.random() * 80
//     var rot = Math.random() * 360
//     var scale = Math.random()* 3

//     h1.innerHTML = arr[a]
//     h1.style.position = "absolute"
//     h1.style.left = x + '%'
//     h1.style.top = y + '%'
//     h1.style.rotate = rot + "deg"
//     h1.style.scale = scale 

//     main.appendChild(h1)
// })