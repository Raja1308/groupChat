const express = require('express')
const router = express.Router()

router.get('/add-product' ,(req,res)=>{
  res.send('<form method="post" action="/admin/product"><input type="text" name="product" placeholder="type product"><button type="submit">Save</button></form>')
})

router.post('/product', (req, res)=>{
    res.redirect('/')
})
module.exports= router