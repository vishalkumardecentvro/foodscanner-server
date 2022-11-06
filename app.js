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

app.get('/allproduct',(req,res)=>{
    let sql = 'select * from product'
    db.query(sql,(err,result)=>{
        if(err){
            res.send("Something wrong with api buddy")
        }
        console.log(result)
        res.send(result)
    })
})

app.get('/product/:barcode',(req,res)=>{
    let sql = `select * from product where barcode = ${req.params.barcode}`
    db.query(sql,(err,result)=>{
        if(err){
            res.send("Something wrong with api buddy")
        }
        console.log(result)
        res.send(result)
    })
})

app.get('/product/nutrients/:product_id',(req,res)=>{
    let sql = `select * from nutrients where product_id = ${req.params.product_id}`
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