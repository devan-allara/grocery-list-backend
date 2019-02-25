const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello :)")
  })

router.post('/', (req, res) => {
    db.collection('groceryList').save(req.body, (err,result) =>{
        console.log(req.body)
        if (err) return console.log(err)
        console.log('saved to database')
        })
  })

  router.post('/new', (req , res) => {
    db.collection('groceryList').save(req.body, (err, result) =>{
        
    })
  }

module.exports = router 