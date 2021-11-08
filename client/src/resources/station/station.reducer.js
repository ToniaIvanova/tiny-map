import {
  PUSH_SELECTED_BY_PRODUCT_STATIONS,
  PUSH_SELECTED_BY_REGION_STATIONS,
} from './station.types';

const initialState = {
  selectedByProductStations: [],
  selectedByRegionStations: [],
};

const StationReducer = (state = initialState, action) => {
  switch(action.type) {
    case PUSH_SELECTED_BY_PRODUCT_STATIONS:
      return {
        ...state,
        selectedByProductStations: [
          ...state.selectedByProductStations,
          ...action.stationsData,
        ],
      };
    case PUSH_SELECTED_BY_REGION_STATIONS:
      return {
        ...state,
        selectedByRegionStations: [
          ...state.selectedByRegionStations,
          ...action.stationsData,
        ]
      }
    default:
      return state;
  }
};

export default StationReducer;