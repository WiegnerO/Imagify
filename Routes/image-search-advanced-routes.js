const express = require('express');
const router = express.Router();
router.use(express.json());
const DBSERVICE = require('../models/dbService');
const CONSOLEOUTPUT = require('../Services/consoleOutputs');

/**
 * This allows users get all the images with a specific characteristic
 */
router.get('/:char', (req, res) => {
    const characteristic = req.params.char;
    console.log(CONSOLEOUTPUT.requestConsole(req));
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
    console.log(CONSOLEOUTPUT.requestConsole(req));
    DBSERVICE.findImagesUsingImage(image)
    .then(images => {
        res.status(201).json(images);
    })
    .catch(error =>{
        res.status(500).json({messages :error});
    })
});

module.exports = router
