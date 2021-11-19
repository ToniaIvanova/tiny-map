import {
  CREATE_STATION,
  PUSH_SELECTED_BY_PRODUCT_STATIONS,
  PUSH_SELECTED_BY_REGION_STATIONS,
  UPDATE_STATION_DONE,
} from './station.types';
import api from '../../common/base.api';

const StationActions = {
  createStation: newStationData => async dispatch => {
    await api.post('/station', newStationData);
    return dispatch({ type: CREATE_STATION });
  },
  
  pushSelectedByProductStations: (productId, currentUser, colorForMap) => async dispatch => {
    const response = await api.post(`/station/product/${productId}`, currentUser);
    const stationsData = response.data;
    return dispatch({
      type: PUSH_SELECTED_BY_PRODUCT_STATIONS,
      stationsData: stationsData.map(station => {
        station.colorForMap = colorForMap;
        return station;
      }),
    });
  },

  pushSelectedByRegionStations: (regionId, currentUser, colorForMap) => async dispatch => {
    const response = await api.post(`/station/region/${regionId}`, currentUser);
    const stationsData = response.data;
    return dispatch({
      type: PUSH_SELECTED_BY_REGION_STATIONS,
      stationsData: stationsData.map(station => {
        station.colorForMap = colorForMap;
        return station;
      }),
    });
  },

  updateStationDone: ({ stationId, currentUser, done }) => async dispatch => {
    const response = await api.post(`/station/${stationId}/done`, { ...currentUser, done });
    const stationData = response.data;
    return dispatch({
      type: UPDATE_STATION_DONE,
      stationData: {
        ...stationData,
        done,
      }
    });
  },
};

export default StationActions;