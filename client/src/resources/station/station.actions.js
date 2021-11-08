import {
  PUSH_SELECTED_BY_PRODUCT_STATIONS,
  PUSH_SELECTED_BY_REGION_STATIONS,
} from './station.types';

const StationActions = {
  pushSelectedByProductStations: (productId, currentUser, colorForMap) => dispatch => 
    fetch(`http://localhost:3001/station/product/${productId}/${currentUser._id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(stationsData => dispatch({
      type: PUSH_SELECTED_BY_PRODUCT_STATIONS,
      stationsData: stationsData.map(station => {
        station.colorForMap = colorForMap;
        return station;
      }),
    })),

  pushSelectedByRegionStations: (regionId, currentUser, colorForMap) => dispatch => 
    fetch(`http://localhost:3001/station/region/${regionId}/${currentUser._id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(stationsData => dispatch({
      type: PUSH_SELECTED_BY_REGION_STATIONS,
      stationsData: stationsData.map(station => {
        station.colorForMap = colorForMap;
        return station;
      }),
    })),
};

export default StationActions;