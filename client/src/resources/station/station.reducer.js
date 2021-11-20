import {
  CREATE_STATION,
  PUSH_SELECTED_BY_PRODUCT_STATIONS,
  PUSH_SELECTED_BY_REGION_STATIONS,
  DELETE_SELECTED_BY_PRODUCT_STATIONS,
  DELETE_SELECTED_BY_REGION_STATIONS,
  UPDATE_STATION_DONE,
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

    case DELETE_SELECTED_BY_PRODUCT_STATIONS: {
      const newStations = state.selectedByProductStations
        .filter(station => station.productName !== action.product.name);
      return {
        ...state,
        selectedByProductStations: newStations,
      }
    }

    case DELETE_SELECTED_BY_REGION_STATIONS: {
      const newStations = state.selectedByRegionStations
        .filter(station => station.regionName !== action.region.name);
      return {
        ...state,
        selectedByRegionStations: newStations,
      }
    }
      

    case UPDATE_STATION_DONE:
      return updateStationDone(state, action);
    
    case CREATE_STATION: 
    default:
      return state;
  }
};

export default StationReducer;

function updateStationDone(state, action) {
  const newProdStations = [];
  for (const station of state.selectedByProductStations) {
    if (station.stationId === action.stationData.stationId) {
      newProdStations.push({
        ...station,
        done: action.stationData.done,
      });
    } else {
      newProdStations.push(station);
    }
  }

  const newRegStations = [];
  for (const station of state.selectedByRegionStations) {
    if (station.stationId === action.stationData.stationId) {
      newRegStations.push({
        ...station,
        done: action.stationData.done,
      });
    } else {
      newRegStations.push(station);
    }
  }
  return {
    ...state,
    selectedByProductStations: newProdStations,
    selectedByRegionStations: newRegStations,
  }
}