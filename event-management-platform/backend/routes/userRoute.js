const express = require('express');
const router = express.Router();



router.get('/username', (req, res) => {
    res.send("AdminUsman")
    console.log("admin usman");
    
})



module.exports = router;