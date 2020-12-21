require('dotenv').config();
const server = require('./api/server')

const port = process.env.PORT ||  6000;

//The first message when the server starts up originally
server.listen(port, () => {
    console.log(`**** Imagify server is currently running on ${port} ****`)
});
