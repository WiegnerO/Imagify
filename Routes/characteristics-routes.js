const express = require('express');
const router = express.Router();
router.use(express.json());

//temporary DB for now
const characteristicsDB = require('../pretendData').characteristics

/**
 * This allows users get all the characteristics
 */
router.get('', (req, res) => {
    console.log('get requset from api/search has been made');
    //will remove this and add the db afterwards
    res.json(characteristicsDB);
});

module.exports = router