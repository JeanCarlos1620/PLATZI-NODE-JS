const express = require('express');
const router = express.Router();

const ProductsService = require('./../services/productService');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/productSchema');


const service = new ProductsService();

router.get('/', async(req, res) => {
    try {
        const productos = await service.find();
        res.send(productos);
    } catch (error) {
        res.status(404).json({ message: error })
    }
})

router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const producto = await service.findOne(id);
            res.json(producto);
        } catch (error) {
            //res.status(404).json({ message: error })
            next(error);
        }
    }
)

router.post('/',
    validatorHandler(createProductSchema, 'body'),
    async(req, res) => {
        const body = req.body;
        const newProduct = await service.created(body);
        res.status(201).json(newProduct);
    }
)

router.patch('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const product = await service.update(id, body);
            res.json(product)
        } catch (error) {
            // res.status(404).json({ message: error.message })
            next(error);
        }

    }
)

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const product = await service.delete(id);
    res.json(product)
})

module.exports = router;