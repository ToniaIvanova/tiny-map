import {
  PUSH_SELECTED_BY_PRODUCT_STATIONS,
} from './station.types';

const StationActions = {
  pushSelectedByProductStations: (productId, currentUser) => dispatch => 
    fetch(`http://localhost:3001/station/product/${productId}/${currentUser._id}/prepared`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(stationsData => dispatch({ type: PUSH_SELECTED_BY_PRODUCT_STATIONS, stationsData }))
};

export default StationActions;