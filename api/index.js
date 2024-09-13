const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { errorHandler, logErrors, boomErrorHandler } = require('./middlewares/errorHandler');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whilelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if (whilelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}

app.use(cors(options));

app.get('/api', (req, res) => {
    res.send('Hola mi primer server');
})

app.use('/api/v1/productos', (req, res) => {
    res.json({ message: 'Rutas de productos' });
});


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.get('/categories/:categoryId/productos/:productId', (req, res) => {
//     const { categoryId, productId } = req.params;
//     res.send({
//         categoryId,
//         productId
//     })
// })

app.listen(port, () => {
    console.log('Escuchando en el puerto: ' + port);
})

// module.exports = app