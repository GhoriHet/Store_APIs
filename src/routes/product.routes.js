const express = require('express');
const router = express.Router();
const validate = require("../middleware/validate");
const { productValidation } = require('../validation/validation_index');
const upload = require('../services/upload');
const { productController } = require('../controller/controller_index');

router.post('/create-product',
    upload.array('avatar', 12),
    validate(productValidation.createProduct),
    productController.createProduct
);

// router.get('/list-category',
//     categoryController.getCategories
// )

// router.put('/update-category/:categoryId',
//     validate(categoryValidation.updateCategory),
//     categoryController.updateCategories
// )

// router.delete('/delete-category/:categoryId',
//     validate(categoryValidation.deleteCategory),
//     categoryController.deleteCategories
// )

module.exports = router;