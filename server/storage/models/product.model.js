import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  stations: [mongoose.Schema.ObjectId]
}, { versionKey: false });

const ProductModel = mongoose.model('Product', ProductSchema, 'Product');

export default ProductModel;
