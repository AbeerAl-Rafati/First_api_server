'use strict';

const express = require('express');
const app = express();


//middlewares
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');




app.get('/', (req, res) => { res.status(200).send('Helloooo in 401 first class =D'); });

app.get('/bad', (req, res) => {
  throw new Error('Errooooooooooorrrrrrrrrrrrrrrr');
});


app.use('*', notFoundHandler); //after all routes
app.use(errorHandler); //befor export


let start = (port) => {
  app.listen(port, () => console.log(`Server listening to ${port}`));
};


module.exports = {
  app,
  start,
};