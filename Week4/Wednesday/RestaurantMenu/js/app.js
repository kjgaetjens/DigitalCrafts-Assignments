// Create a page which displays all the dishes on a web page. The listing will include the following: 
// Title
// Description
// Price 
// ImageURL (Display the image not the actual image URL) :) 

// The page should also have an option to FILTER the dishes by course: 
// Starters
// Entrees
// Desserts 

// * Make sure the website is responsive on mobile devices. 


//take the item you want and add it to the list of the appropriate section. use Course for appropriate section


let starters = document.getElementById("starters")
let entrees = document.getElementById("entrees")
let desserts  = document.getElementById("desserts")
let nav = document.getElementById("nav")
let emptySectionDiv = 
`<div>
    <h3>Sorry, no items available</h3>
    <p>Sorry, there are no items available. Please enjoy our other menu options.</p>
</div>`

const generateMenu = () => {
    let startersArray = []
    let entreesArray = []
    let dessertsArray = []
    dishes.forEach(dish => {
        let dishDiv = 
        `<div class="menu-item">
            <h3>${dish.title}</h3>
            <h5>${dish.price}</h5>
            <p>${dish.description}</p>
            <img src="${dish.imageURL}"></img>
        </div>`
        if (dish.course == "Starters") {
            startersArray.push(dishDiv)
        } else if (dish.course == "Entrees") {
            entreesArray.push(dishDiv)
        } else if (dish.course == "Desserts") {
            dessertsArray.push(dishDiv)
        }
    })
    if (startersArray.length > 0) {
        starters.innerHTML = startersArray.join("")
    } else {
        starters.innerHTML = emptySectionDiv
    }
    if (entreesArray.length > 0) {
        entrees.innerHTML = entreesArray.join("")
    } else {
        entrees.innerHTML = emptySectionDiv
    }
    if (dessertsArray.length > 0) {
        desserts.innerHTML = dessertsArray.join("")
    } else {
        desserts.innerHTML = emptySectionDiv
    }

    let vegetarian = `<a id="vegetarian" onclick="filterVegetarian()">Vegetarian Menu</a>`
    nav.insertAdjacentHTML("beforeend", vegetarian)
    if (nav.childElementCount == 4) {
        allFood.remove(this)
    }
}


const filterVegetarian = () => {
    let startersArray = []
    let entreesArray = []
    let dessertsArray = []
    vegetarianDishes = dishes.filter(dish => {
        if (dish.isVegetarian) {
            return dish
        }
    }
    )
    vegetarianDishes.forEach(dish => {
        let dishDiv = 
        `<div class="menu-item">
            <h3>${dish.title}</h3>
            <h5>${dish.price}</h5>
            <p>${dish.description}</p>
            <img src="${dish.imageURL}"></img>
        </div>`
        if (dish.course == "Starters") {
            startersArray.push(dishDiv)
        } else if (dish.course == "Entrees") {
            entreesArray.push(dishDiv)
        } else if (dish.course == "Desserts") {
            dessertsArray.push(dishDiv)
        }
    })
    if (startersArray.length > 0) {
        starters.innerHTML = startersArray.join("")
    } else {
        starters.innerHTML = emptySectionDiv
    }
    if (entreesArray.length > 0) {
        entrees.innerHTML = entreesArray.join("")
    } else {
        entrees.innerHTML = emptySectionDiv
    }
    if (dessertsArray.length > 0) {
        desserts.innerHTML = dessertsArray.join("")
    } else {
        desserts.innerHTML = emptySectionDiv
    }

    let allFood = `<a id="allFood" onclick="generateMenu()">Back to Main Menu</a>`
    nav.insertAdjacentHTML("beforeend", allFood)
    if (nav.childElementCount == 4) {
        vegetarian.remove(this)
    }
}

generateMenu()