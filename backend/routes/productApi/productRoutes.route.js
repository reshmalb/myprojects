const express = require('express');
const router = express.Router();
const productController= require("../../controllers/product/product.controller")
const upload = require("../../middlewares/uploadMiddleware")

router.post('/addproduct',upload.single('image'),productController.InsertProductData);
router.get('/getproduct',productController.GetProductData);

module.exports = router;
