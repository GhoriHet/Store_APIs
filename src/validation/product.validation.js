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
    params: {
        productId: Joi.string().required().trim()
    }
}

const updateProduct = {
    params: {
        productId: Joi.string().required().trim()
    }
}

module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct
}