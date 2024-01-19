import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

import handlerFunctions from './controller.js';

const { getProducts, addProduct, deleteProduct, editProduct, addUser, getUsers, deleteUser } = handlerFunctions;

app.get('/products', getProducts);
app.post('/product', addProduct);
app.delete('/product/:productId', deleteProduct);
app.put('/product/:productId', editProduct);
app.get('/users', getUsers);
app.post('/user', addUser);
app.delete('/user/:userId', deleteUser);

ViteExpress.listen(app, 9999, () => console.log(`Server running on http://localhost:9999`));