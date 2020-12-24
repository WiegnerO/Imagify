/**
 * This route allows for the basic commands such as deleting and adding new images to the repository
 */

const express = require('express');
const router = express.Router();
router.use(express.json());

//temporary DB for now
const images = require('../pretendData').images

/**
 * This allows users add a new image
 */
router.post('', (req, res) => {
    console.log('post requset to api/images has been made');
    const image = req.body
    //will remove this and add the db afterwards
    images.push(image);
    res.status(201).json({message : image});
});

/**
 * This allows users delete a image from the server
 */
router.delete('/:image', (req, res) => {
    console.log(`delete requset to api/images/${image} has been made`);
    const image = req.params.image;
    //will remove this and add the db afterwards
    for(i=0 ; i < images.length ; i++){
       if(images[i].image == image){
        res.status(201).json(images[i]);
        images.splice(i , 1);
        return;
       }
    }
    res.status(500).json({messages : `the delete requset from has NOT been made`});
});

module.exports = router