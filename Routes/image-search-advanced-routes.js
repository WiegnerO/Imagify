const express = require('express');
const router = express.Router();
router.use(express.json());

//temporary DB for now
const images = require('../pretendData').images

/**
 * This allows users get a a group of images with a specific characteristic
 */
router.post('/:characteristic', (req, res) => {
    const characteristic = req.body;
    console.log(`get requset from api/search/advanced/${characteristic} has been made`);
    //will remove this and add the db afterwards
    if(characteristic){
        res.status(201).json(characteristic);
        console.log(`get requset from api/${characteristic} has been made`);
    }else{
        res.status(500).json({messages : `the get requset from has NOT been made : ${characteristic} does NOT exist in the db` });
    }
});

/**
* This allows users to search images given an image using its characteristics
*/
router.get('/:image', (req, res) => {
    const image = req.params.image;
    console.log(`get requset from api/search/advanced/${image} has been made`);
    //will remove this and add the db afterwards
    if(image){
        res.status(201).json(image);
    }else{
        res.status(500).json({messages : `the get requset from has NOT been made : ${image} does NOT exist in the db` });
    }
});

module.exports = router