//Color genrator


// var box = document.querySelector(".box")
// var btn = document.querySelector("button")

// btn.addEventListener("click", function () {
//     var c1 = Math.floor(Math.random() * 256)
//     var c2 = Math.floor(Math.random() * 256)
//     var c3 = Math.floor(Math.random() * 256)

//     box.style.background = `rgb(${c1},${c2},${c3})`
//     box.innerHTML = `rgb(${c1},${c2},${c3})`
// })


//2nd task
var arr = [
    {
        team: "CSK",
        color: "yellow"
    },
    {
        team: "RCB",
        color: "red"
    },
    {
        team: "SRH",
        color: "orange"
    }
]

var box = document.querySelector(".box")
var btn = document.querySelector("button")
var h1 = document.querySelector("h1")

btn.addEventListener("click", function () {
    var winners = arr[Math.floor(Math.random() * arr.length)]
    h1.innerHTML = winners.team
    box.style.backgroundColor = winners.color
})


