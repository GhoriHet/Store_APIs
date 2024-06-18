const mongoose = require('mongoose');

const subCategoriesSchema = new mongoose.Schema(
    {
        category_id: {
            type: mongoose.Types.ObjectId,
            ref: 'categories',
            required: true
        },

        subcategory_name: {
            type: String,
            required: true,
            trim: true
        },

        subcategory_desc: {
            type: String,
            required: true,
            trim: true
        },

        subcategory_image: {
            type: String,
            required: true
        },

        isActive: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Subcategories = mongoose.model("Subcategories", subCategoriesSchema);

module.exports = Subcategories;
