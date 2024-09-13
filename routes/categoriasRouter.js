const express = require('express');
const router = express.Router();

router.get('/:categoriaId/productos/:productosId', (req, res) => {
    const { categoriaId, productosId } = req.params;
    res.send({
        categoriaId,
        productosId
    })
})

module.exports = router;