const Joi = require('joi');

const categoryId = Joi.string().uuid();
const productsId = Joi.string().uuid();

const categorySchema = Joi.object({
  categoryId: categoryId.required(),
  productsId: productsId.required(),
});

module.exports = { categorySchema };
