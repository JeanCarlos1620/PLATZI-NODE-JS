const express = require('express');
const { createCategorySchema, getCategorySchema, updateCategorySchema } = require('../schemas/categorySchema');
const router = express.Router();
const CategoryService = require('../services/categoryService');
const validatorHandler = require('../middlewares/validatorHandler');
const service = new CategoryService();

router.get('/', async(req, res, next) => {
    try {
        const categories = await service.find();
        res.json(categories)
    } catch (error) {
        next(error);
    }
})

router.get('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const categorie = await service.findOne(id);
            res.json(categorie);
        } catch (error) {
            next(error);
        }
    }
)

router.post('/',
    validatorHandler(createCategorySchema, 'body'),
    async(req, res, next) => {
        try {
            const body = req.body;
            const newCateory = await service.create(body);
            res.status(201).json(newCateory);
        } catch (error) {
            next(error);
        }
    }
)

router.patch('/:id',
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const category = await service.update(id, body);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
)

router.delete('/:id',
    async(req, res, next) => {
        try {
            const { id } = req.param;
            const category = await service.delete(id);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
)

module.exports = router;