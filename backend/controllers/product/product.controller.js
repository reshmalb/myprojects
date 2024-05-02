

const Product= require("../../models/product/product.model");

const InsertProductData=  async (req, res) => {
    try {
      const { name, description, price, quantity } = req.body;
      console.log(req.body)
      const imageUrl = req.file ? req.file.path : null; // Multer stores file path in req.file.path
      console.log(imageUrl);
      const newProduct = new Product({
        name,
        description,
        price,
        quantity,
        imageUrl
      });
  
      await newProduct.save();
      const data = {
        success: true,
        message: "Product created successfully!",
        
    };
      res.status(201).json(data);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  module.exports ={
    InsertProductData

  };