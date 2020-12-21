const express = require('express');
const server = express();
server.use(express.json());

//require the routes
const imagesRouter = require('../Routes/images-routes.js');
const imageSearchRouter = require('../Routes/image-search-routes.js');

//use the routes
server.use('/api/images', imagesRouter);
server.use('/api/search', imageSearchRouter);


//Output when the user does a /GET message on the mase url
server.get('', (req, res) => {
    res.json({ message: "*** This is the front page of the Imagify server ***"});
})

module.exports = server;