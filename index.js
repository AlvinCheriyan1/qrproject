const QRcode = require('qrcode');
const express = require('express');
const app = express();
const port = 8383
app.use(express.json());
app.use(express.static('public'));


app.listen(port, () => console.log(`server starts on ${port}`))
let data = {
    name: "Alvin",
    age: "18",
    height: "183",
    school: "UMD"
}
let vals = JSON.stringify(data)






app.post('/myfirstpost',(req, res) => {
    console.log("my first post reuqest", req.body);
    let message = {
        value : "SUCCESS",
        name: req.body.name
    }
    res.send(message)
    })

app.post('/myfirstqr',(req, res) =>{

    QRcode.toDataURL(JSON.stringify(req.body), function (err, url) {
        if(err) {
         console.log("error occurred")
        }else{
            let response = {
                value: url
            }
            console.log(url)
            res.send(response);
        }
       
        
    })
})

app.get('/',(req, res) => {
    res.sendFile('public/index.html')
})









// function execute(){
//     alert("thanks")
//     app.post('/',(req, res) => {
//        data.name = document.getElementById(fname).value
//        data.age = document.getElementById(lname).value
//        data.height = document.getElementById(height).value
//        data.school = document.getElementById(school).value
       

//     })
//     let stringdata = JSON.stringify(data)

//     // QRCode.toDataURL(stringdata, function (err, url) {
//     //     if(err) {
//     //      console.log("error occurred")
//     //     }else{
//     //         console.log(url)
//     //     }
        
//     // })
    
// }

