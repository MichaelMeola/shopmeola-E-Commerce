import express from 'express';
import morgan from 'morgan';
import multer from 'multer';
import path from 'path';
import ViteExpress from 'vite-express';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Specify the destination folder to store uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    const filename = uniqueSuffix + extension;
    cb(null, filename); // Set the filename for the uploaded file
  },
});

const upload = multer({
    storage: storage,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
    },
  });

import handlerFunctions from './controller.js';

const { getProducts, addProduct, deleteProduct, editProduct, addUser, getUsers, deleteUser } = handlerFunctions;

app.get('/products', getProducts);
app.post('/product', addProduct);
app.delete('/product/:productId', deleteProduct);
app.put('/product/:productId', upload.single('image'), editProduct); // Use `upload.single` middleware to handle the image upload
app.get('/users', getUsers);
app.post('/user', addUser);
app.delete('/user/:userId', deleteUser);

ViteExpress.listen(app, 9999, () => console.log(`Server running on http://localhost:9999`));