const express = require('express');
const router = express.Router();
const productController= require("../../controllers/product/product.controller")
const upload = require("../../middlewares/uploadMiddleware")

router.post('/addproduct',upload.single('image'),productController.InsertProductData)

module.exports = router;
