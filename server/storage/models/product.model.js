import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  stations: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Station',
  }],
}, { versionKey: false });

const ProductModel = mongoose.model('Product', ProductSchema, 'product');

export default ProductModel;
