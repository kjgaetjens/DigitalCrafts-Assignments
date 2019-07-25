// Create a grocery list app which allows you to add different categories. Here are list of requested features. 
// * User should be able to add the grocery category (Walmart, HEB, Fiesta, Sams Club etc)  (name and address)
// * User should be able to view all grocery categories 
// * User should be able to delete grocery categories
// * Items must be stored in Firebase database 
// * The website should be mobile responsive 

// HARD MODE:
// * Add user registration and authentication 
// * Allow user to add items to the grocery categories
// * Allow the user to login and then store the categories for that user. This means each category in Firebase will be associated with a particular user. 

//convert to classes
//add groceries to the store

//declare variables
let groceryCatRef = database.ref('categories')
let catList = document.getElementById('cat-list')
let addCatButton = document.getElementById('add-cat-button')
let catNameField = document.getElementById('cat-name')
let catAddressField = document.getElementById('cat-address')

//add data (make sure to add if/else validation to make sure they entered info into cat name field)
addCatButton.addEventListener('click', () => {
    catName = catNameField.value
    catAddress = catAddressField.value
    addCat(catName, catAddress)
    catNameField.value = ''
    catAddressField.value = ''
})

const addCat = (name, address) => {
    groceryCatRef.push({
        name: name,
        address: address
    })
}

const deleteCat = (id) => {
    groceryCatRef.child(id).remove()
}

groceryCatRef.on('value', snap => {
    let catValuesArray = []

    for(key in snap.val()) {
        let cat = snap.val()[key]
        cat.id = key
        catValuesArray.push(cat)
    }

    displayCat(catValuesArray)
})

const displayCat = cats => {
    let catDivArray = cats.map(cat => {
        return `
                <li class="cat-li">
                    <div class="cat-container">
                        <span class="cat-name-header">${cat.name}: <span>
                        <span class="cat-address-header">${cat.address}</span>
                        <br>
                        <button onclick="deleteCat('${cat.id}')">Delete</button>
                    <div>
                </li>
                `
    })
    catList.innerHTML = catDivArray.join('')
}