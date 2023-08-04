const express = require('express');
const validatorHandler = require('../middleware/validator.handler');
const { categorySchema } = require('../schemas/categories.schema');

const router = express.Router();

router.get(
  '/:categoryId/products/:productsId',
  validatorHandler(categorySchema, 'params'),
  (req, res) => {
    const { categoryId, productsId } = req.params;
    res.json({
      categoryId,
      productsId,
      name: `Product ${productsId}`,
      price: 100 * productsId,
    });
  }
);

module.exports = router;
