const ProductSelector = {
  getProductTableVisibility: state => state.product.productTableVisibility,

  getSelectedProductIds: state => state.product.selectedProductIds,

  getNextProductColorIndex: state => state.product.nextProductColorIndex,
};

export default ProductSelector;