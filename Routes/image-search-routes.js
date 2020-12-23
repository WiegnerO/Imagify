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

/**
 * This allows users get a a group of images with a specific characteristic
 */
router.post('/:characteristic', (req, res) => {
    const characteristic = req.body;
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
router.get('/image/:image', (req, res) => {
    const image = req.params.image;
    //will remove this and add the db afterwards
    if(image){
        res.status(201).json(image);
        console.log(`get requset from api/image/${image} has been made`);
    }else{
        res.status(500).json({messages : `the get requset from has NOT been made : ${image} does NOT exist in the db` });
    }
});

module.exports = router
