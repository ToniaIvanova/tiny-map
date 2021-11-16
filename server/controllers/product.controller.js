import ProductModel from "../storage/models/product.model.js";

class ProductController {
  getAllProducts = async (req, res) => {
    const products = await ProductModel.aggregate([
      { $project: { stations: 0 } },
      { $sort: { name: 1 } }
    ]);

    return res.send(products);
  }
}

export default new ProductController();