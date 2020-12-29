const express = require('express');
const server = express();
server.use(express.json());

/**
 * Help with CORS issues
 */
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, x-requested-with, content-type, accept, authorization");
    next();
  });

//require the routes
const imagesRouter = require('../Routes/images-routes.js');
const imageSearchRouter = require('../Routes/image-search-routes.js');
const imageSearchAdvancedRouter = require('../Routes/image-search-advanced-routes.js');
const characteristicsRouter = require('../Routes/characteristics-routes');

//use the routes
server.use('/api/images', imagesRouter);
server.use('/api/search', imageSearchRouter);
server.use('/api/search/advanced', imageSearchAdvancedRouter);
server.use('/api/characteristic' , characteristicsRouter)


//Output when the user does a /GET message on the mase url
server.get('', (req, res) => {
    res.json({ message: "*** This is the front page of the Imagify server ***"});
})

module.exports = server;