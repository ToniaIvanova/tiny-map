import {
  SWITCH_ON_PRODUCT_TABLE_VISIBILITY,
  PUSH_SELECTED_PRODUCT_ID,
  DELETE_SELECTED_PRODUCT_ID,
  GET_ALL_PRODUCTS,
} from './product.types';
import { colors } from '../../common/constants/colors';

const initialState = {
  productTableVisibility: false,
  selectedProductIds: [],
  freeColors: [...colors],
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
    
    case PUSH_SELECTED_PRODUCT_ID: {
      const color = state.freeColors.pop();
      return {
        ...state,
        selectedProductIds: [
          ...state.selectedProductIds,
          {
            productId: action.productId,
            color,
          }
        ]
      };
    }
    
    case DELETE_SELECTED_PRODUCT_ID: {
      const newSelectedProductIds = state.selectedProductIds;
      const newFreeColors = state.freeColors;

      const indexForDelete = state.selectedProductIds.findIndex(productData => {
        return productData.productId === action.productId;
      });
      const productForDelete = newSelectedProductIds.splice(indexForDelete, 1);
      newFreeColors.push(productForDelete[0].color);

      return {
        ...state,
        selectedProductIds: newSelectedProductIds,
        freeColors: newFreeColors,
      };
    }

    default: 
      return state;
  }
};

export default productReducer;