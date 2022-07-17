
const express = require('express')
const app = express()
const adminRoute = require('./NewRoute/RouteFol/Admin')
const shopRoute = require('./NewRoute/RouteFol/shop')

 const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))

app.use('/admin',adminRoute)
app.use(shopRoute)
app.use((req,res)=>{
 res.status(404).send("404 found error")
})

 app.listen(3000, ()=>{
    console.log("Server is runing")
 })

