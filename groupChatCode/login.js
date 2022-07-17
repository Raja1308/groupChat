const express = require("express")
const router = express.Router()

 

 router.get('/login',(req,res)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/product" method="POST"><input id="username" type="text" placeholder="username" name="username"><button type="submit">add</button></form>')
})
router.post('/product', (req,res)=>{
    // res.send(req.body)
    res.redirect('/')
    console.log("login info",req.body)
    
})
module.exports= router