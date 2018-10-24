const express = require('express');
const routes = express.Router();

const ProdutController = require('./controllers/ProductController');

routes.get('/products', ProdutController.index);
routes.post('/products', ProdutController.store);
routes.get('/products/:id', ProdutController.show);
routes.put('/products/:id', ProdutController.update);
routes.delete('/products/:id', ProdutController.destroy);


module.exports = routes;