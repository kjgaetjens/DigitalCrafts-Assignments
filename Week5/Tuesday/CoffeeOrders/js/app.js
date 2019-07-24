// You are the owner of a coffee shop and you want to manage the orders you receive from the customers.

// Create an app which list all the coffee orders on a web page. You can also type in the email address in a textbox and search for a particular coffee order by email address. You should also be able to delete the coffee order. You should also be able to add a new coffee order. 

// Coffee Order Web API Documentation

// Get all orders:
// http://dc-coffeerun.herokuapp.com/api/coffeeorders/

// Create new order: 
// http://dc-coffeerun.herokuapp.com/api/coffeeorders/
// Params: emailAddress (string), coffee (string) 

// Get order by email: 
// http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress

// Delete order by email: 
// http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress



//go back and add form via javascript

//get all the orders and display on screen
let ordersUrl = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders/'
let ordersList = document.getElementById('orders-list')

let addButton = document.getElementById('add')
addButton.addEventListener('click', function() {
    let emailAddress = document.getElementById('email')
    let coffee = document.getElementById('coffee')
    fetch(ordersUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'emailAddress': emailAddress.value,
          'coffee': coffee.value,
        })
      })//should refresh orders here
    emailAddress.value = ''
    coffee.value = ''
})
        //add success message that gets cleared after a few seconds using timeout?
        //refresh orders at interval / when new item added

let deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click', function() {
    let emailAddress = document.getElementById('delete-email')
    let urlWithAddress = ordersUrl + emailAddress.value
    fetch(urlWithAddress, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'emailAddress': emailAddress.value
        })
    })//should refresh orders here
    emailAddress.value = ''
})       

async function fetchOrders() {
    let response = await fetch(ordersUrl)
    return await response.json()
}

async function fetchFilteredOrders() {
    let emailAddress = document.getElementById('search-email')
    let urlWithAddress = ordersUrl + emailAddress.value
    let response = await fetch(urlWithAddress)
    return await response.json()
}

async function displayOrders(fetchedJSON) {
    fetchedJSON().then(json => {
        if (json['_id']) {
            ordersList.innerHTML = `
            <li class="order">
                <span>${json['emailAddress']}</span><br>
                <span>${json['coffee']}</span><br>
            </li>
        `
        }
        else {
            let orderValues = Object.values(json)
            let orders = orderValues.map(order => {
                return `
                    <li class="order">
                        <span>${order['emailAddress']}</span><br>
                        <span>${order['coffee']}</span><br>
                    </li>
                `
            })
            ordersList.innerHTML = orders.join('')
        }
    })
}

let searchButton = document.getElementById('search')
searchButton.addEventListener('click', function() {
    displayOrders(fetchFilteredOrders)
})       

displayOrders(fetchOrders)