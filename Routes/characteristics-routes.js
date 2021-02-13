const express = require('express');
const router = express.Router();
router.use(express.json());
const DBSERVICE = require('../models/dbService');
const CONSOLEOUTPUT = require('../Services/consoleOutputs');

/**
 * This allows users get all the characteristics
 */
router.get('', (req, res) => {
    console.log(CONSOLEOUTPUT.requestConsole(req));
    DBSERVICE.findCharacteristics()
        .then(characteristicData =>{
            res.status(200).json(characteristicData);
        })
        .catch(error =>{
            res.status(500).json(error);
        })
});

/**
 * This allows users get the characteristics of a specific image
 */
router.get('/:id', (req, res) => {
    console.log(CONSOLEOUTPUT.requestConsole(req));
    const id = req.params.id;
    DBSERVICE.getImageCharacteristic(id)
        .then(characteristicData =>{
            res.status(200).json(characteristicData);
        })
        .catch(error =>{
            res.status(500).json(error);
        })
});

/**
 * This allows users add a new characteristics
 */
router.post('', (req, res) => {
    console.log(CONSOLEOUTPUT.requestConsole(req));
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
