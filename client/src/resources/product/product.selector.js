const ProductSelector = {
  getProductTableVisibility: state => state.product.productTableVisibility,

  getSelectedProductIds: state => state.product.selectedProductIds,

  getNextProductColorIndex: state => state.product.nextProductColorIndex,

  getAllProducts: state => state.product.allProducts,
};

export default ProductSelector;