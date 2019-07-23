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
    let emailAddress = document.getElementById('email').value
    let coffee = document.getElementById('coffee').value
    fetch(ordersUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'emailAddress': emailAddress,
          'coffee': coffee,
        })
      })
})


async function fetchOrders() {
    let response = await fetch(ordersUrl)
    return await response.json()
}

async function displayOrders(fetchedJSON) {
    fetchedJSON().then(json => {
        let orderValues = Object.values(json)
        let orders = orderValues.map(order => {
            return `
                <li class="order">
                    <span>${order['emailAddress']}</span><br>
                    <span>${order['coffee']}</span>
                </li>
            `
        })
        ordersList.innerHTML = orders.join('')
    })
}

displayOrders(fetchOrders)