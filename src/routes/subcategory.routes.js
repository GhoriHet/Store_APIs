const express = require('express');
const router = express.Router();
const validate = require("../middleware/validate");
const { subcategoryValidation } = require('../validation/validation_index');
const { subcategoryController } = require('../controller/controller_index');

router.post('/create-subcategory',
    validate(subcategoryValidation.createSubcategory),
    subcategoryController.createSubcategories
)

router.get('/get-subcategory',
    subcategoryController.getSubcategories
)

router.put('/update-subcategory/:subcategoryId',
    validate(subcategoryValidation.updateSubcategory),
    subcategoryController.updateSubcategory
)

router.delete('/delete-subcategory/:subcategoryId',
    validate(subcategoryValidation.deleteSubcategory),
    subcategoryController.deleteSubcategory
)

module.exports = router;