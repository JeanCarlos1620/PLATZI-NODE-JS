const express = require('express');
const productosRouter = require('./productosRouter');
const userRouter = require('./userRouter');
const categoriasRouter = require('./categoriasRouter');
const orderRouter = require('./orderRouter');
const customerRouter = require('./customerRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productosRouter);
    router.use('/users', userRouter);
    router.use('/categories', categoriasRouter);
    router.use('/orders', orderRouter);
    router.use('/customers', customerRouter);
}

module.exports = routerApi;