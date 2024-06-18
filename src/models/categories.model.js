const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            required: true,
            trim: true
        },

        category_desc: {
            type: String,
            required: true,
            trim: true
        },

        category_image: {
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
)

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = Categories;