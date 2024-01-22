function cards() {
    console.log("hello");
    const api = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    
    fetch(api)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Throw an error if the response is not OK
        }
        return response.json(); // Parse JSON body of the response
    })
    .then(dataOutput => {
        document.getElementById('second').innerHTML = dataOutput.deck_id;
        console.log("Received", dataOutput);
    })
    .catch(error => {
        console.error("Fetch error:", error); // Handle any errors that occurred during the fetch
    });


}