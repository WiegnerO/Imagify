const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development);

module.exports = {
    addImage,
    findImage,
    findImageUsingName,
    addCharacteristic,
    findCharacteristics,
    removeImage,
    findImagesUsingCharacteristic,
    findImagesUsingImage
};

/**
 * This adds an image  in the images table
 */
async function addImage(image){
    const [id] = await db('images').insert(image);
    return id;
}

/**
 * This adds an characteristic in the characteristics table
 */
async function addCharacteristic(characteristic){
    const [id] = await db('characteristics').insert(characteristic);
    return id;
}

/**
 * This query will return all imagess in the imagess table
 */
function findImage(){
    return db('images');
}

/**
 * This query will return all characteristics
 */
function findCharacteristics(){
    return db('characteristics');
}

/**
 * This query will delete the tuple in the images table with the same id value
 */
function removeImage(id){
    return db('images')
    .where({ id })
    .del();
}

/**
 * This query will return the tuple in the images table of the input parameter
 */
function findImageUsingName(image_name){
    return db('images')
    .where({ image_name })
}

/**
 * This query will return the tuples of the images that contain a certian characteristic
 */
function findImagesUsingCharacteristic(characteristic){
    return db('images')
    .join('characteristics AS char' , 'char.image_id' , 'images.id')
    .where({ characteristic })
    .select(
        'images.id',
        'images.image_name',
        'images.image_object',
        'images.image_poster',
        'images.price'
    )
}

/**
 * This query will return the tuples of the all images that have the same characte
 */
function findImagesUsingImage(searchImage){
    return db('characteristics AS char')
    .where('char.image_id', '=', searchImage.id)
    .join({ ca: 'characteristics'}, 'char.characteristic' , '=' , 'ca.characteristic')
    .where('ca.image_id', '!=', searchImage.id)
    .groupBy('ca.image_id')
    .join('images' , 'images.id', '=', 'ca.image_id' )
    .select(
        'images.id',
        'images.image_name',
        'images.image_object',
        'images.image_poster',
        'images.price'
    )
}