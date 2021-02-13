const express = require('express');
const router = express.Router();
router.use(express.json());
const DBSERVICE = require('../models/dbService');
const CONSOLEOUTPUT = require('../Services/consoleOutputs');

/**
 * This allows users add a new image
 * The only precondition of the input object is that the characteristics do not contain any duplicates
 */
router.post('', (req, res) => {
    console.log(CONSOLEOUTPUT.requestConsole(req));
    const inputImage = req.body
    const { characteristics } = req.body;
    const promiseArray = [];
    DBSERVICE.addImage(inputImage)
        .then(image_id =>{
            if(!!characteristics){
                characteristics.forEach(characteristic => {
                    let newcharacteristic = {
                        "image_id" : image_id, 
                        "characteristic" : characteristic
                    }
                    let newCharFunc = DBSERVICE.addCharacteristic(newcharacteristic);
                    promiseArray.push(newCharFunc);
                });
                Promise.all(promiseArray)
            }
        })
        .then(result =>{
            res.status(200).json({messages : "POST request was succesful"});
        })
        .catch(err =>{
            res.status(500).json({messages : "POST request has not been made : " + err});
        })
});

/**
 * This allows users delete a image from the server
 */
router.delete('/:image_id', (req, res) => {
    const image_id = req.params.image_id;
    console.log(CONSOLEOUTPUT.requestConsole(req));
    DBSERVICE.removeImage(image_id)
    .then(count =>{
        if(count > 0){
            res.status(200).json({ message: "Deleted"})
        }
        else{
            res.status(404).json({ message: "Image does not exist"})
        }
    })
    .catch( error => {
        res.status(500).json({ message: error})
    })
});

module.exports = router
