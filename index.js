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
         console.log("ERROR")
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

app.get('/secondpage', (req, res) =>{
    res.sendFile(__dirname + '/public/second.html');
})

app.get('/finance', (req, res) =>{
    res.sendFile(__dirname + '/public/finance.html')
})




