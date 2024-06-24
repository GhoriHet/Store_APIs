const Products = require("../models/products.model");
const { uploadFile } = require("../services/cloudinary");

const createProduct = async (request, response) => {
    try {
        const files = request.files;
        if (!files || files.length === 0) {
            return response.status(400).json({ message: 'No files uploaded!' });
        }

        const uploadPromises = files.map(file => uploadFile(file.path));
        const uploadResults = await Promise.all(uploadPromises);

        const avatar = uploadResults.map((result, index) => ({
            public_id: result.public_id,
            url: result.url,
            originalname: files[index].originalname
        }));

        const createProducts = await Products.create({
            ...request.body,
            avatar
        });

        if (!createProducts) {
            return response.status(500).json({
                message: 'Internal Server Error!'
            });
        }

        return response.status(200).json({
            success: true,
            data: createProducts,
            message: 'Product Data Added Successfully!'
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error!'
        });
    }
}

module.exports = {
    createProduct
}