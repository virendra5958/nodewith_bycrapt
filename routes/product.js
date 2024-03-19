const express = require('express');
const product = require ('../controller/product');
const authMiddleware = require('../auth');
const router = express.Router();

router.post("/", authMiddleware(['admin']), product.createProduct ,()=> console.log('fetch'));
router.get("/", authMiddleware(['seller']), product.editProduct);
router.patch("/", authMiddleware(['buyer','seller']), product.getProduct);

module.exports = router;