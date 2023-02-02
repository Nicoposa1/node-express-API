const express = require('express');

const router = express.Router();

router.get('/:categoryId/products/:productsId', (req, res) => {
   const {categoryId, productsId} = req.params;
   res.json({
      categoryId,
      productsId,
      name: `Product ${productsId}`,
      price: 100 * productsId,
   }) 
}) 

module.exports = router;
