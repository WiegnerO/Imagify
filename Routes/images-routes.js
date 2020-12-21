/**
 * This route allows for the basic commands such as deleting and adding new images to the repository
 */

const express = require('express');
const router = express.Router();
router.use(express.json());

//temporary DB for now
const images = require('../pretendData').images

/**
 * This allows users get all the images
 */
router.get('', (req, res) => {
    console.log('get requset from api/images has been made');
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
        console.log(`get requset from api/images/${image} has been made : ` + JSON.stringify(image) + ' exist in the db');
        return;
       }
    }
    res.status(500).json({messages : `the get requset from has NOT been made : ${image} does NOT exist in the db` });
});

/**
 * This allows users add a new image
 */
router.post('', (req, res) => {
    const image = req.body
    //will remove this and add the db afterwards
    console.log(image)
    images.push(image);
    res.status(201).json({message : image});
    console.log('post requset from api/images has been made : ' + JSON.stringify(image));
});

/**
 * This allows users delete a image from the server
 */
router.delete('/:image', (req, res) => {
    const image = req.params.image;
    //will remove this and add the db afterwards
    for(i=0 ; i < images.length ; i++){
       if(images[i].image == image){
        res.status(201).json(images[i]);
        images.splice(i , 1);
        console.log(`delete requset from api/images/${image} has been made : image with the name ${image} was deleted`);
        return;
       }
    }
    res.status(500).json({messages : `the delete requset from has NOT been made`});
});

module.exports = router