const express = require('express')
const mysql = require('mysql')

const app = express();

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'MyNewPass',
    database : 'foodscanner'
})

db.connect((err)=>{
    if(err)
    throw err;
    console.log("my sql connected")
})

app.get('/allproduct/',(req,res)=>{
    let sql = 'select * from product'
    db.query(sql,(err,result)=>{
        if(err){
            res.send("Something wrong with api buddy")
        }
        console.log(result)
        res.send(result)
    })
})


app.listen('3000',(res,req)=>{
    console.log('server started on 3000')
})