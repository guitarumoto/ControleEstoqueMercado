  
const express = require('express');
const produtoscontroller = require('./controller/ProdutosController');
const routes = express.Router()

routes.post('/cadastrar', produtoscontroller.store);
routes.get('/visualizar', produtoscontroller.index);

module.exports = routes;