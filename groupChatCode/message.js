const express = require("express")
const router = express.Router()
const data = require('./data')
 console.log(data)

router.get('/',(req,res)=>{
    res.send('<form onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)" action="/" method="POST"><input id="message" type="text" placeholder="type msg" name="message"><input id="username" type="hidden" name="username"><button type="submit">Submit</button></form>')
})
router.post('/', (req,res)=>{
    console.log("msg info",req.body)
   data.push(`{${req.body.username}:${req.body.message}}`)
   console.log(data)
})

module.exports = router
