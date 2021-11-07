import {
  PUSH_SELECTED_BY_PRODUCT_STATIONS,
} from './station.types';

const initialState = {
  selectedByProductStations: [],
};

const StationReducer = (state = initialState, action) => {
  switch(action.type) {
    case PUSH_SELECTED_BY_PRODUCT_STATIONS: {
      console.log({ action });
      return {
        ...state,
        selectedByProductStations: [
          ...state.selectedByProductStations,
          ...action.stationsData,
        ],
      };
    }
    default:
      return state;
  }
};

export default StationReducer;