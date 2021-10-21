const ObjectId = require("mongodb").ObjectId;

class ProductController {
  getAllProducts = async (req, res) => {
    const productCollection = req.app.locals.product;
    const product = await productCollection.find({}).toArray();
  
    res.send(product);
  }

  getProductsByIds = async (req, res) => {
    const productIds = JSON.parse(req.params.productIds);
    if (productIds[0]) {
      const objectIds = productIds.map(id => ObjectId(id));
  
      const productCollection = req.app.locals.product;
      const product = await productCollection.find({ _id: { $in: objectIds } }).toArray();
  
      res.send(product);
    }
    else {
      res.send([]);
    }
  }
}

module.exports = new ProductController();