// Create a page which allows users to search for stock quotes. The page will consist of a TextBox where users can enter the symbol of the stock they are looking for. When the presses the "Show Quotes" button the app will call the "getStockQuote" function implemented in stockQuotes.js (attached) and get the stock quotes. You should update the quotes every 2 seconds by making a call to getStockQuote function. Your app should display the name of the stock and also the price of the stock. 

let showQuotes = document.getElementById("showQuotes")
let inputStock = document.getElementById("inputStock")
let stockContainer = document.getElementById("stockContainer")

showQuotes.addEventListener("click", () => {
    let inputStockValue = inputStock.value
    window.setInterval( () => {
        let stock = getStockQuote(inputStockValue)
        let stockName = stock.name
        let stockQuote = stock.price
        stockContainer.innerHTML = `<span>${stock.name}: </span>
                                    <span>$${stock.price}</span>`
    }, 2000)
})

