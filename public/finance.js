function generateInfo(){
const apiUrl = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=qpwVOUk1B1KOzyXg8sEMW00fS56Myefh'

const desiredStock = document.getElementById("money").value

fetch(apiUrl)
.then(function(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
    .then(data =>{
    //    console.log("This is the stock to search for", desiredStock)
        console.log("Data", data)
        const foundStock = data.find(stock => stock.symbol === desiredStock);
        if (foundStock) {
            console.log("Found stock:", foundStock);
            document.getElementById("symbol").innerHTML = "Symbol: " + foundStock.symbol
            document.getElementById("name").innerHTML = "Name: " + foundStock.name
            document.getElementById("price").innerHTML = "Price: " + foundStock.price
            document.getElementById("exchange").innerHTML = "Exchange: " + foundStock.exchange
            document.getElementById("short").innerHTML = "Short form: " + foundStock.exchangeShortName



        } else {
            console.log("Stock not found");
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}