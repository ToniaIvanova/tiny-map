import api from '../../common/base.api';
import {
  SWITCH_ON_REGION_TABLE_VISIBILITY,
  PUSH_SELECTED_REGION_ID,
  DELETE_SELECTED_REGION_ID,
  GET_ALL_REGIONS,
} from './region.types';

const RegionActions = {
  switchOnRegionTableVisibility: () => dispatch => dispatch({ type: SWITCH_ON_REGION_TABLE_VISIBILITY }),

  getAllRegions: () => dispatch =>
    api.get('/region').then(response => response.data)
    .then(regions => dispatch({ type: GET_ALL_REGIONS, regions })),

  pushSelectedRegionId: regionId => dispatch => dispatch({
    type: PUSH_SELECTED_REGION_ID,
    regionId,
  }),

  deleteSelectedRegionId: regionId => dispatch => dispatch({
    type: DELETE_SELECTED_REGION_ID,
    regionId,
  })
};

export default RegionActions;