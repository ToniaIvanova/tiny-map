import mongoose from "mongoose";
import ProductModel from '../storage/models/product.model.js';
import StationModel from '../storage/models/station.model.js';

class ProductController {
  getAllProducts = async (req, res) => {
    const products = await ProductModel.find({});
    
    return res.send(products);
  }

  getProductsByIds = async (req, res) => {
    const productIds = JSON.parse(req.params.productIds);
    if (productIds[0]) {
      const objectIds = productIds.map(mongoose.Types.ObjectId);
  
      const products = await ProductModel.find({ _id: { $in: objectIds } });
  
      return res.send(products);
    }
    return res.send([]);
  }
}

export default new ProductController();