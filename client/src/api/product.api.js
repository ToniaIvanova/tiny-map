import baseApi from './base.api';

class ProductApi {
  getAllProducts = async () => {
    return baseApi.get('/product');
  };
}

export default new ProductApi();