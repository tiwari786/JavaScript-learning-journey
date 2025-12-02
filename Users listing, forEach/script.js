//make a array of objects and mame it user
// make a card in html
// users pr lagao forEach and print hello n times
// make a variable sum and give it a value "" (empty string)
// add on "hello" in sum and print it outside loop
// add on card(html code) in sum and print it too.
// select parent (main) and put in its innerHTML
// replace sample data with real data of array of objects

const users = [
    {
        fullName: "Aarav Sharma",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        profession: "Frontend Developer",
        description: "A passionate frontend developer specializing in React, Tailwind CSS, and UI/UX design.",
        tags: ["React", "Tailwind", "JavaScript", "UI/UX"]
    },

    {
        fullName: "Neha Gupta",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        profession: "UX Designer",
        description: "Neha creates modern and user-friendly product experiences with a focus on accessibility.",
        tags: ["UX", "Figma", "Wireframes", "Product Design"]
    },

    {
        fullName: "Rohan Mehta",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        profession: "Backend Engineer",
        description: "Experienced backend engineer working with Node.js, Express, and MongoDB architectures.",
        tags: ["Node.js", "MongoDB", "APIs", "Express"]
    },

    {
        fullName: "Simran Kaur",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        profession: "Digital Marketer",
        description: "Helping brands grow with data-driven digital marketing strategies strategies strategies.",
        tags: ["SEO", "Content", "Google Ads", "Branding"]
    },

    {
        fullName: "Aditi Verma",
        image: "https://plus.unsplash.com/premium_photo-1764501818547-52daac608a44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
        profession: "Full Stack Developer",
        description: "Full stack developer skilled in MERN stack, cloud deployment, and system design.",
        tags: ["MERN", "AWS", "System Design", "DevOps"]
    }
];

var sum = ""
users.forEach(function (elem) {
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

var main = document.querySelector("main")
main.innerHTML = sum


















// var arr = [10, 20, 30, 40]
// sum = 0
// arr.forEach(function (elem) {
//     sum = sum + elem
// })
// console.log(sum)

// sum = 0;
// arr.forEach((elem) => {
//     sum = sum + elem.age
// })
// console.log(sum/arr.lengh)

