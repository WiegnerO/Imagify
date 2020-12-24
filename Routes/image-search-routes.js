const express = require('express');
const router = express.Router();
router.use(express.json());

//temporary DB for now
const images = require('../pretendData').images

/**
 * This allows users get all the images
 */
router.get('', (req, res) => {
    console.log('get requset from api/search has been made');
    //will remove this and add the db afterwards
    res.json(images);
});

/**
 * This allows users get a specific image based off of their name
 */
router.get('/:image', (req, res) => {
    const image = req.params.image;
    console.log(`get requset from api/search/${image} has been made`);
    //will remove this and add the db afterwards
    for(i=0 ; i < images.length ; i++){
       if(images[i].image == image){
        res.status(201).json(images[i]);
        console.log(`get requset from api/search/${image} has been made : ` + JSON.stringify(image) + ' exist in the db');
        return;
       }
    }
    res.status(500).json({messages : `the get requset from has NOT been made : ${image} does NOT exist in the db` });
});

module.exports = router
