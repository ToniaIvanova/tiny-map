import api from '../../common/base.api';
import {
  SWITCH_ON_PRODUCT_TABLE_VISIBILITY,
  PUSH_SELECTED_PRODUCT_ID,
  DELETE_SELECTED_PRODUCT_ID,
  GET_ALL_PRODUCTS,
} from './product.types';

const ProductActions = {
  switchOnProductTableVisibility: () => dispatch => dispatch({ type: SWITCH_ON_PRODUCT_TABLE_VISIBILITY }),

  getAllProducts: () => dispatch =>
    api.get('/product').then(response => response.data)
    .then(products => dispatch({ type: GET_ALL_PRODUCTS, products })),

  pushSelectedProductId: productId => dispatch => dispatch({
    type: PUSH_SELECTED_PRODUCT_ID,
    productId,
  }),

  deleteSelectedProductId: productId => dispatch => dispatch({
    type: DELETE_SELECTED_PRODUCT_ID,
    productId,
  })
};

export default ProductActions;