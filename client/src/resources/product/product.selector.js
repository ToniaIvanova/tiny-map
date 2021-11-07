const ProductSelector = {
  getProductTableVisibility: state => state.product.productTableVisibility,

  getSelectedProductIds: state => state.product.selectedProductIds,
};

export default ProductSelector;