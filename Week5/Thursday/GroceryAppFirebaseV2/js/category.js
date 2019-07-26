let url = location.href
let catId = url.substring(url.indexOf('?')+1, url.length)
console.log(catId)
let grocerySingleCatRef = database.ref('categories').child(catId)
let groceryListRef = database.ref(`categories/${catId}/groceries`)
let itemList = document.getElementById('view-item-container')
let itemNameField = document.getElementById('item-name')
let addItemButton = document.getElementById('add-item-button')
//should i set a new, more specific reference here?

//use catid to populate the header

//use cat id to populate page


const addItem = (name) => {
    groceryListRef.push({
        name: name,
    })
}

addItemButton.addEventListener('click', () => {
    let itemName = itemNameField.value
    addItem(itemName)
    itemNameField.value = ''
})

const deleteItem = (id) => {
    groceryListRef.child(id).remove()
}

//maybe pull part of this out into app.js
const displayItems = items => {
    let itemDivArray = items.map(item => {
        return `
                <li class="item-li">
                    <div class="item-container">
                        <span class="item-name-header">${item.name}<span>
                        <br>
                        <button onclick="deleteItem('${item.id}')">Delete</button>
                    <div>
                </li>
                `
    })
    itemList.innerHTML = itemDivArray.join('')
}

//change this to the grocerylist child
groceryListRef.on('value', snap => {
    let itemValuesArray = []

    for(key in snap.val()) {
        let item = snap.val()[key]
        item.id = key
        itemValuesArray.push(item)
    }

    displayItems(itemValuesArray)
})