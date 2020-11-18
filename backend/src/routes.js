  
const express = require('express');
const produtoscontroller = require('./controller/ProdutosController');
const routes = express.Router()

routes.get('/visualizar', produtoscontroller.index);
routes.post('/cadastrar', produtoscontroller.store);

module.exports = routes;