import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  _id: String,
  name: String,
  stations: [String]
}, { versionKey: false });

const ProductModel = mongoose.model('Product', ProductSchema, 'product');

export default ProductModel;
