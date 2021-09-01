const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
app.set('view engine','hbs')

const connectionStr = "mongodb+srv://tommy:123456abc@cluster0.lkrga.mongodb.net/DoQuocBinhDB"

app.get('/',async (req,res)=>{
    var client = await MongoClient.connect(connectionStr)
    let dbo = client.db("GCH0805DB");
    let results = await dbo.collection("students").find({}).toArray();
    res.render('index',{data:results})
})

const PORT = process.env.PORT || 5000
app.listen(PORT);
console.log("Server is running on: "+ PORT)