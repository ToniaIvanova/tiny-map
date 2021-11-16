import {
  CREATE_STATION,
  PUSH_SELECTED_BY_PRODUCT_STATIONS,
  PUSH_SELECTED_BY_REGION_STATIONS,
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
    if (station.stationId === action.stationsData.stationId) {
      newProdStations.push({
        ...station,
        done: action.stationsData.done,
      });
    } else {
      newProdStations.push(station);
    }
  }

  const newRegStations = [];
  for (const station of state.selectedByRegionStations) {
    if (station.stationId === action.stationsData.stationId) {
      newRegStations.push({
        ...station,
        done: action.stationsData.done,
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