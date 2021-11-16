import {
  SWITCH_ON_PRODUCT_TABLE_VISIBILITY,
  PUSH_SELECTED_PRODUCT_ID,
  INC_PRODUCT_COLOR_INDEX,
  GET_ALL_PRODUCTS,
} from './product.types';

const initialState = {
  productTableVisibility: false,
  selectedProductIds: [],
  nextProductColorIndex: 0,
  allProducts: [],
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: 
      return {
        ...state,
        allProducts: action.products,
      }
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
      };
    
    case INC_PRODUCT_COLOR_INDEX:
      return {
        ...state,
        nextProductColorIndex: action.colorIndex,
      }
    default: 
      return state;
  }
};

export default productReducer;