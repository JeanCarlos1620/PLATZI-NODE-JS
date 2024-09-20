const express = require('express');
const router = express.Router();

const OrderService = require('./../services/orderService');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createOrderSchema, getOrderSchema, addItemSchema } = require('../schemas/orderSchema');


const service = new OrderService();

router.get('/', async(req, res) => {
    try {
        const orders = await service.find();
        res.send(orders);
    } catch (error) {
        res.status(404).json({ message: error })
    }
})

router.get('/:id',
    validatorHandler(getOrderSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const order = await service.findOne(id);
            res.json(order);
        } catch (error) {
            //res.status(404).json({ message: error })
            next(error);
        }
    }
)

router.post('/',
    validatorHandler(createOrderSchema, 'body'),
    async(req, res) => {
        const body = req.body;
        const newOrder = await service.created(body);
        res.status(201).json(newOrder);
    }
)

router.post('/add-item',
    validatorHandler(addItemSchema, 'body'),
    async(req, res, next) => {
        try {
            const body = req.body;
            const item = await service.addItem(body);
            res.status(201).json(item);
        } catch (error) {
            next(error);
        }
    }
)

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const order = await service.delete(id);
    res.json(order)
})

module.exports = router;