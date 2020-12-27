const express = require('express');
const router = express.Router();
router.use(express.json());
const DBSERVICE = require('../models/dbService')

/**
 * This allows users get all the characteristics
 */
router.get('', (req, res) => {
    console.log('get requset from api/search has been made');
    DBSERVICE.findCharacteristics()
        .then(characteristicData =>{
            res.status(200).json(characteristicData);
        })
        .catch(error =>{
            res.status(200).json(error);
        })
});

/**
 * This allows users add a new characteristics
 */
router.post('', (req, res) => {
    console.log('post requset to api/characteristic has been made');
    const characteristics = req.body;
    DBSERVICE.addCharacteristic(characteristics)
        .then(result =>{
            console.log('Characteristics post requset is succesful');
            res.status(201).json({message : result});
        })
        .catch(error =>{
            res.status(500).json(error);
        })
});

module.exports = router