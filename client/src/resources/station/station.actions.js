import {
  CREATE_STATION,
  PUSH_SELECTED_BY_PRODUCT_STATIONS,
  PUSH_SELECTED_BY_REGION_STATIONS,
  UPDATE_STATION_DONE,
} from './station.types';
import api from '../../common/base.api';

const StationActions = {
  createStation: newStationData => dispatch => 
    api.post('/station', newStationData)
      .then(() => dispatch({ type: CREATE_STATION })),
  
  pushSelectedByProductStations: (productId, currentUser, colorForMap) => dispatch => 
    api.get(`/station/product/${productId}/${currentUser._id}`)
      .then(response => response.data)
      .then(stationsData => dispatch({
        type: PUSH_SELECTED_BY_PRODUCT_STATIONS,
        stationsData: stationsData.map(station => {
          station.colorForMap = colorForMap;
          return station;
        }),
      })),

  pushSelectedByRegionStations: (regionId, currentUser, colorForMap) => dispatch => 
    api.get(`/station/region/${regionId}/${currentUser._id}`)
      .then(response => response.data)
      .then(stationsData => dispatch({
        type: PUSH_SELECTED_BY_REGION_STATIONS,
        stationsData: stationsData.map(station => {
          station.colorForMap = colorForMap;
          return station;
        }),
      })),
  
  updateStationDone: ({ stationId, currentUser, done }) => dispatch =>
    api.put(`/station/${stationId}/${currentUser._id}/done`, { done })
      .then(response => response.data)
      .then(() => dispatch({
        type: UPDATE_STATION_DONE,
        stationsData: { 
          stationId,
          done,
        }
      })),
};

export default StationActions;