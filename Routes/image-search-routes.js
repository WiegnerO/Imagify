const express = require('express');
const router = express.Router();
router.use(express.json());
const DBSERVICE = require('../models/dbService')


/**
 * This allows users get all the images
 */
router.get('', (req, res) => {
    console.log('GET requset from api/image has been made');
    DBSERVICE.findImage()
        .then(imageData =>{
            res.status(200).json(imageData);
        })
        .catch(error =>{
            res.status(500).json(error);
        })
});

/**
 * This allows users get a specific image based off of their name
 */
router.get('/:image_name', (req, res) => {
    const image_name = req.params.image_name;
    console.log(`GET requset from api/search/${image_name} has been made`);
    DBSERVICE.findImageUsingName(image_name)
    .then(image => {
        res.status(200).json(image);
    })
    .catch(error =>{
        res.status(500).json(error);
    })
});

module.exports = router
