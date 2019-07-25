/*
Create a grocery list app which allows you to add different categories as well as grocery items related to grocery category. Here are list of requested features. 
* User should be able to add the grocery category 
* User should be able to add grocery items to a particular category
* User should be able to view the grocery items based on the grocery category
* User should be able to remove items from the grocery list 
* Items must be stored in Firebase database 

HARDMODE: 
- Allow users to signup for the app
- Allow users to login to the app
- Allow users to add the grocery categories and items based on their user id. 
- Users should be able to view only their grocery categories and grocery items once they login to the app
*/


//convert categories to classes
    //-include name, address, and then grocery array in class
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