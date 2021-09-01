const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
app.set('view engine','hbs')

const connectionStr = "mongodb+srv://tommy:123456abc@cluster0.lkrga.mongodb.net/DoQuocBinhDB"

app.get('/',async (req,res)=>{
    var client = await MongoClient.connect(connectionStr)
    let dbo = client.db("GCH0805DB");
    let results = await dbo.collection("students").find({}).toArray();
    // results.forEach(element => {
    //     console.log(element.name.charAt(0))
    //     element['first'] = element.name.charAt(0)
    // });
    //Tao  them cot 'first' co gia tri la ky tu dau tien cua cot 'name'
    for(i=0;i<results.length;i++){
        results[i].first = results[i].name.charAt(0);
    }
    //chi hien thi 2 phan tu dau tien
    res.render('index',{data:results.slice(0,2)})
})

const PORT = process.env.PORT || 5000
app.listen(PORT);
console.log("Server is running on: "+ PORT)