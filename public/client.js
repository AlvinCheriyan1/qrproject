async function postData(url, data) {
    console.log("IN ASYNC FUNCTION");
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    console.log("response recieved", response)
    return response.json(); // parses JSON response into native JavaScript objects
  }
function execute(){
    let data = {
        name: "",
        age: "",
        height: "",
        school: ""
    }
    console.log("PREPARING TO POST");   
       data.name = document.getElementById("fname").value
       data.age = document.getElementById("lname").value
       data.height = document.getElementById("height").value
       data.school = document.getElementById("school").value
       
      postData("http://localhost:8383/myfirstpost", data).then((myfirstresponse) => {
        console.log("Alvin is calling", myfirstresponse); // JSON data parsed by `data.json()` call
        document.getElementById("title").innerHTML = "Welcome " + myfirstresponse.name

      });

    
}


function executeGR(){
    let data = {
        name: "",
        age: "",
        height: "",
        school: ""
    }
    console.log("PREPARING TO POST");   
       data.name = document.getElementById("fname").value
       data.age = document.getElementById("lname").value
       data.height = document.getElementById("height").value
       data.school = document.getElementById("school").value
       
      postData("http://localhost:8383/myfirstqr", data).then((myfirstresponse) => {
        console.log("QR Recieve", myfirstresponse); // JSON data parsed by `data.json()` call
      //  document.getElementById("img").innerHTML =  "<img src = " + myfirstresponse + ">" 
      let img = document.createElement('img');

      // Set the 'src' attribute of the image to the 'value' from the response
      img.src = myfirstresponse.value;
      
      // Optionally set width and height, or add any other attributes
      img.width = 150; // Example width
      img.height = 150; // Example height
      img.alt = 'QR Code'; // Alt text
      
      // Append the image element to the body of the document or any other desired element
      document.getElementById("img").appendChild(img);

      });





} 