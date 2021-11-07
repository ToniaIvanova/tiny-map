import {
  SWITCH_ON_PRODUCT_TABLE_VISIBILITY,
  PUSH_SELECTED_PRODUCT_ID,
} from './product.types';

const ProductActions = {
  switchOnProductTableVisibility: () => dispatch => dispatch({ type: SWITCH_ON_PRODUCT_TABLE_VISIBILITY }),

  pushSelectedProductId: productId => dispatch => dispatch({ type: PUSH_SELECTED_PRODUCT_ID, productId}),
};

export default ProductActions;