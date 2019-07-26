let catList = document.getElementById('cat-list')
let addCatButton = document.getElementById('add-cat-button')
let catNameField = document.getElementById('cat-name')
let catAddressField = document.getElementById('cat-address')


//add data (make sure to add if/else validation to make sure they entered info into cat name field)
addCatButton.addEventListener('click', () => {
    let catName = catNameField.value
    let catAddress = catAddressField.value
    addCat(catName, catAddress)
    catNameField.value = ''
    catAddressField.value = ''
})

//maybe pull part of this out into app.js
const displayCat = cats => {
    let catDivArray = cats.map(cat => {
        return `
                <li class="cat-li">
                    <div class="cat-container">
                        <span class="cat-name-header">${cat.name}: <span>
                        <span class="cat-address-header">${cat.address}</span>
                        <br>
                        <button onclick="deleteCat('${cat.id}')">Delete</button>
                        <br>
                        <button onclick="navToCat('${cat.id}')">Open</button>
                    <div>
                </li>
                `
    })
    catList.innerHTML = catDivArray.join('')
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