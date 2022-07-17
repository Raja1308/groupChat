
const express = require('express')
const app = express()
const login = require('./NewRoute/login')
const message = require('./NewRoute/message')

 const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))

app.use(login)
app.use(message)
 app.listen(3000, ()=>{
    console.log("Server is runing")
 })

