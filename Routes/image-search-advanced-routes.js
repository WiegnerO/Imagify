const express = require('express');
const router = express.Router();
router.use(express.json());
const DBSERVICE = require('../models/dbService')

/**
 * This allows users get all the images with a specific characteristic
 */
router.get('/:char', (req, res) => {
    const characteristic = req.params.char;
    console.log(`GET requset from api/search/advanced has been made`);
    DBSERVICE.findImagesUsingCharacteristic(characteristic)
    .then(images => {
        res.status(201).json(images);
    })
    .catch(error =>{
        res.status(500).json({messages :error});
    })
});

/**
* This allows users to search images given an image using its characteristics
*/
router.post('', (req, res) => {
    const image = req.body;
    console.log(`POST requset from api/search/advanced/`);
    DBSERVICE.findImagesUsingImage(image)
    .then(images => {
        res.status(201).json(images);
    })
    .catch(error =>{
        res.status(500).json({messages :error});
    })
});

module.exports = router