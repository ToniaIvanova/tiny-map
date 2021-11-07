import {
  SWITCH_ON_PRODUCT_TABLE_VISIBILITY,
  PUSH_SELECTED_PRODUCT_ID,
} from './product.types';

const initialState = {
  productTableVisibility: false,
  selectedProductIds: [],
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ON_PRODUCT_TABLE_VISIBILITY: 
      return {
        ...state,
        productTableVisibility: true,
      };
    
    case PUSH_SELECTED_PRODUCT_ID: 
      return {
        ...state,
        selectedProductIds: [
          ...state.selectedProductIds,
          action.productId,
        ]
      }
    default: 
      return state;
  }
};

export default productReducer;