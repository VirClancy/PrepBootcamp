'use strict';

var express = require('express');
var bodyParser = require('body-parser');

const router = require("./routes") //a

var app = express();

app.use("./app", router) //a

module.exports = app; // esto es solo para testear mas facil



// acuerdense de agregar su router o cualquier middleware que necesiten aca

// el condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000);
