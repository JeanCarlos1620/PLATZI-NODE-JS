const express = require('express');
const productosRouter = require('./productosRouter');
const userRouter = require('./userRouter');
const categoriasRouter = require('./categoriasRouter');
const orderRouter = require('./orderRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productosRouter);
    router.use('/users', userRouter);
    router.use('/categories', categoriasRouter);
    router.use('/orders', orderRouter);
}

module.exports = routerApi;