
import { content } from "./index.js"

function createContact() {

const contact = document.createElement("div")
contact.className = "contact"
content.textContent = ""
content.appendChild(contact)

const header = document.createElement("h1")
header.className = "header"
header.textContent = "Contact Us"
contact.appendChild(header)

const contactInfo = document.createElement("div")
contact.appendChild(contactInfo)

const email = document.createElement("p")
contactInfo.appendChild(email)
email.textContent = "email: veggieplanet@notarealemail.com"

const phone = document.createElement("p")
contactInfo.appendChild(phone)
phone.textContent = "phone number: 555-555-5555"


}


export default createContact















