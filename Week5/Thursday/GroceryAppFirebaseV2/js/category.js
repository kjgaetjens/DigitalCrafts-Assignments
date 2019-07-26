let url = location.href
let catId = url.substring(url.indexOf('?')+1, url.length)
console.log(catId)
let grocerySingleCatRef = database.ref(catId)
let itemList = document.getElementById('view-item-container')
//should i set a new, more specific reference here?

//use catid to populate the header

//use cat id to populate page

//maybe pull part of this out into app.js
const displayItems = items => {
    let itemDivArray = items.map(item => {
        return `
                <li class="item-li">
                    <div class="item-container">
                        <span class="item-name-header">${item.name}<span>
                        <br>
                        <button onclick="deleteItem('${cat.id}')">Delete</button>
                    <div>
                </li>
                `
    })
    itemList.innerHTML = itemDivArray.join('')
}

grocerySingleCatRef.on('value', snap => {
    let itemValuesArray = []

    for(key in snap.val()) {
        let item = snap.val()[key]
        item.id = key
        itemValuesArray.push(item)
    }

    displayItems(itemValuesArray)
})