import baseApi from './base.api';
import StationApi from './station.api';

class ProductApi {
  getAllProducts = async () => {
    return baseApi.get('/product');
  };

  getProductsByIds = async ({ productIds, currentUser }) => {
    const productsData = await baseApi.get(`/product/["${productIds.join("\", \"")}"]`);
    const stationsForTable = (await Promise.all(
       productsData.data.map(async product => (await StationApi.getStationsByProductId({
        productId: product._id,
        productName: product.name,
        currentUser,
      }))))
    ).flat();
    return stationsForTable;
  };
}

export default new ProductApi();