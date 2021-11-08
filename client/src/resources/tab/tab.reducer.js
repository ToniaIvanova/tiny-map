import {
  CHANGE_ACTIVE_TAB,
} from './tab.types';
import {
  PRODUCT_TAB,
} from '../../common/constants/tabs';

const initialState = {
  activeTab: PRODUCT_TAB,
};

const tabReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.newActiveTabKey,
      };
    default:
      return state;
  };
};

export default tabReducer;
