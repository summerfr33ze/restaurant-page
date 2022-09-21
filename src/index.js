import createHome from "./home.js"
import createMenu from "./menu.js"
import createContact from "./contact.js"
import "./style.css"


const body = document.querySelector("body")


const homeButton = document.createElement("button")
homeButton.textContent = "Home"
body.appendChild(homeButton)

const menuButton = document.createElement("button")
menuButton.textContent = "Menu"
body.appendChild(menuButton)


const contactButton = document.createElement("button")
contactButton.textContent = "Contact"
body.appendChild(contactButton)

export const content = document.createElement("div")
body.appendChild(content)

homeButton.addEventListener("click", createHome)


menuButton.addEventListener("click", createMenu)

contactButton.addEventListener("click", createContact)

