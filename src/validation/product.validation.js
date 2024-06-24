const Joi = require('joi');

const createProduct = {
    body: {
        category_id: Joi.string().required(),
        subcategory_id: Joi.string().required(),
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        isActive: Joi.boolean()
    }
}

const getProduct = {
    body: Joi.object().keys()
}

const deleteProduct = {
    params: Joi.object().keys()
}

const updateProduct = {
    params: Joi.object().keys()
}

module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct
}