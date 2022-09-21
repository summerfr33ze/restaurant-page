import { content } from "./index.js"


function createHome() {


    const name = document.createElement("h1")
    name.textContent = "Veggie Planet"
    content.textContent = ""
    content.appendChild(name)

    const about = document.createElement("p")
    about.textContent = "VeggiePlanet is your source for the ultimate guilt-free foods on your quest to save the planet! Our chefs share our vision for a future where meat is a relic of a forgotten time!"
    content.appendChild(about)
    
    const hours = document.createElement("div")
    const hours1 = document.createElement("p")
    hours1.textContent = "Monday: Closed"
    hours.appendChild(hours1)
    const hours2 = document.createElement("p")
    hours2.textContent = "Tuesday: 10am-9pm"
    hours.appendChild(hours2)
    const hours3 = document.createElement("p")
    hours3.textContent = "Wednesday: 10am-9pm"
    hours.appendChild(hours3)
    const hours4 = document.createElement("p")
    hours4.textContent = "Thursday: 10am-9pm"
    hours.appendChild(hours4)
    const hours5 = document.createElement("p")
    hours5.textContent = "Friday: 10am-10pm"
    hours.appendChild(hours5)
    const hours6 = document.createElement("p")
    hours6.textContent = "Saturday: 10am-10pm"
    hours.appendChild(hours6)
    const hours7 = document.createElement("p")
    hours7.textContent = "Sunday: 10am-9pm"
    hours.appendChild(hours7)
    content.appendChild(hours)
}


export default createHome