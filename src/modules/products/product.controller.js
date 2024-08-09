import productModel from "../../../DB/models/product.model.js"

//create product
export const createProduct = async (req, res) => {
    try {
        const { name, category, price, count } = req.body;
        const products = await productModel.create({ name, category, price, count });
        return res.status(201).json({ message: "success", products })
    }
    catch (error) {
        return res.status(500).json({ message: "error", error })
    }

}
// get product by id
export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        else {
            return res.status(200).json({ message: "success", product })
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error", error })
    }

}
//get all product
export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        return res.status(200).json({ message: "success", products })
    }
    catch (error) {
        return res.status(500).json({ message: "error", error })
    }

}
//update product by id
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { price, count } = req.body;
        const product = await productModel.findByIdAndUpdate(id, { price, count }, { new: true });
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        else {
            return res.status(200).json({ message: "success", product })
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error", error });
    }
}
//delete product by id
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        else {
            return res.status(200).json({ message: "sucess", product })
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error", error });
    }
}

