import {
  SWITCH_ON_REGION_TABLE_VISIBILITY,
  PUSH_SELECTED_REGIONS_ID,
  INC_REGION_COLOR_INDEX,
} from './region.types';

const RegionActions = {
  switchOnRegionTableVisibility: () => dispatch => dispatch({ type: SWITCH_ON_REGION_TABLE_VISIBILITY }),

  pushSelectedRegionId: regionId => dispatch => dispatch({ type: PUSH_SELECTED_REGIONS_ID, regionId}),

  incRegionColorIndex: predIndex => dispatch => dispatch({ type: INC_REGION_COLOR_INDEX, colorIndex: predIndex + 1 }),
};

export default RegionActions;