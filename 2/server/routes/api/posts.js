const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();



// Get posts
router.get('/', (req, res) => {
    res.send('hello');
});

// add post


// delete post



module.exports = router;