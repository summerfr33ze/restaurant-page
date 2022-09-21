import { content } from "./index.js"

function createMenu() {

    const menu = document.createElement("div")
    menu.className = "menu"
    content.textContent = ""
    content.appendChild(menu)



    const header = document.createElement("h1")
    header.className = "header"
    header.textContent = "Menu"
    menu.appendChild(header)

   

    const drinks = document.createElement("h1") 
    drinks.className = "menu-item"
    drinks.textContent = "Drinks"
    menu.appendChild(drinks)

    const bloodyMary = document.createElement("div")
    menu.appendChild(bloodyMary)
    const bloodyTitle = document.createElement("h1")
    bloodyTitle.textContent = "Bloody Mary"
    bloodyMary.appendChild(bloodyTitle)
    const bloodyDescription = document.createElement("p")
    bloodyDescription.textContent = "Distilled from organic grains grown in the purest of soils, our house vodka makes Russian vodka look like Vladimir Putin's face. It is combined with tomato juice from heirloom tomatoes grown  on local vines, and other Bloody Mary standards. It doesn't get any better than this"
    bloodyMary.appendChild(bloodyDescription)



    const celeryWater = document.createElement("div")
    menu.appendChild(celeryWater)
    const celeryTitle = document.createElement("h1")
    celeryTitle.textContent = "Celery Water"
    celeryWater.appendChild(celeryTitle)
    const celeryDescription = document.createElement("p")
    celeryWater.appendChild(celeryDescription)
    celeryDescription.textContent = "Farmer's market organic celery combined with triple-distilled spring water"

    const dinners = document.createElement("h1") 
    dinners.className = "menu-item"
    dinners.textContent = "Dinners"
    menu.appendChild(dinners)

    const veggieFajitas = document.createElement("div")
    menu.appendChild(veggieFajitas)
    const  veggieTitle = document.createElement("h1")
    veggieTitle.textContent = "Veggie Fajitas"
    veggieFajitas.appendChild(veggieTitle)
    const veggieDescription = document.createElement("p")
    veggieFajitas.appendChild(veggieDescription)
    veggieDescription.textContent = "Smoky grilled mushrooms are the core ingredient of these fajitas. They contain guacamole, salsa, and jalapenos from sustainable vegan farms."

    

    const coconutCurry = document.createElement("div")
    menu.appendChild(coconutCurry)
    const coconutTitle = document.createElement("h1")
    coconutTitle.textContent = "Coconut Curry"
    coconutCurry.appendChild(coconutTitle)
    const coconutDescription = document.createElement("p")
    coconutCurry.appendChild(coconutDescription)
    coconutDescription.textContent = "Gross shit that vegans eat idk"


}



export default createMenu