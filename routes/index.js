const express = require('express')
const router = express.Router()

// Local Host 3000 Main Page (Render index.ejs file)
router.get('/', (req, res) =>{
    res.render('index')
})

// Export starting page
module.exports = router