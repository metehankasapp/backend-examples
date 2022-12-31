const express = require('express');
const router = express.Router();

const path = require('path');


// __dirname demek şu anki klasör yani admin.js in bulunduğu admin klasörü
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;




