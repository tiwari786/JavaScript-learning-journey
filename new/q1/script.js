


// function getWeather(city) {
//     const apiKey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`; 
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//         .then((raw) => raw.json())
//         .then((result) => {
//             console.log(result)
//         }).catch((error) => console.error("Error fetching weather:", error));
// }


// getWeather("London")





// Scenario-1 Weather dashboard with error handling
async function getWeather(city) {
    try {
        const apiKey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

        let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)


        if (!raw.ok) {
            throw new Error("Something went wrong")
        }

        let realData = await raw.json();
        console.log(realData)

    } catch (error) {
        console.log(error.message)
    }
}


getWeather("Leh")



// Scenario-2 bulk email sending simulation with parallel promises and error handling
const users = [
    "vip@gmail.com",
    "vkt@gmail.com",
    "vktiwari@gmail.com"
]


function sendEmail(email) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 10)

        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10)
            if (probability <= 5) resolve("Email sent")
            else reject("Email not sent")
        }, time * 1000)
    })
}

async function sendEmails(userlist) {
    let allResponses = userlist.map(function (email) {
        return sendEmail(email)
            .then(function (data) {
                console.log(data)
            }).catch(function (err) {
                console.log(err)
            })
    })

    let ans = await Promise.all(allResponses)

    ans.forEach(function (status) {
        console.log(status)
    })

    console.log(allResponses)
}
sendEmails(users)