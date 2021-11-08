import {
  SWITCH_ON_PRODUCT_TABLE_VISIBILITY,
  PUSH_SELECTED_PRODUCT_ID,
  INC_PRODUCT_COLOR_INDEX,
} from './product.types';

const ProductActions = {
  switchOnProductTableVisibility: () => dispatch => dispatch({ type: SWITCH_ON_PRODUCT_TABLE_VISIBILITY }),

  pushSelectedProductId: productId => dispatch => dispatch({ type: PUSH_SELECTED_PRODUCT_ID, productId}),

  incProductColorIndex: predIndex => dispatch => dispatch({ type: INC_PRODUCT_COLOR_INDEX, colorIndex: predIndex + 1 })
};

export default ProductActions;