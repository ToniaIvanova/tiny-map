import api from '../../common/base.api';
import {
  SWITCH_ON_REGION_TABLE_VISIBILITY,
  PUSH_SELECTED_REGIONS_ID,
  INC_REGION_COLOR_INDEX,
  GET_ALL_REGIONS,
} from './region.types';

const RegionActions = {
  switchOnRegionTableVisibility: () => dispatch => dispatch({ type: SWITCH_ON_REGION_TABLE_VISIBILITY }),

  getAllRegions: () => dispatch =>
    api.get('/region').then(response => response.data)
    .then(regions => dispatch({ type: GET_ALL_REGIONS, regions })),

  pushSelectedRegionId: regionId => dispatch => dispatch({ type: PUSH_SELECTED_REGIONS_ID, regionId}),

  incRegionColorIndex: predIndex => dispatch => dispatch({ type: INC_REGION_COLOR_INDEX, colorIndex: predIndex + 1 }),
};

export default RegionActions;