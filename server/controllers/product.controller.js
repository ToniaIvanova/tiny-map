import ProductModel from "../storage/models/product.model.js";

class ProductController {
  getAllProducts = async (req, res) => {
    const products = await ProductModel.find({});

    return res.send(products);
  }

  getProductsByIds = async (req, res) => {
    const productIds = JSON.parse(req.params.productIds);

    if (productIds[0]) {
      const products = await ProductModel.find({ _id: { $in: productIds } });
      return res.send(products);
    }
    return res.send([]);
  }
}

export default new ProductController();