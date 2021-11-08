import {
  SWITCH_ON_REGION_TABLE_VISIBILITY,
  PUSH_SELECTED_REGIONS_ID,
  INC_REGION_COLOR_INDEX,
} from './region.types';

const initialState = {
  regionTableVisibility: false,
  selectedRegionIds: [],
  nextRegionColorIndex: 0,
}

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ON_REGION_TABLE_VISIBILITY: 
      return {
        ...state,
        regionTableVisibility: true,
      };

    case PUSH_SELECTED_REGIONS_ID: 
      return {
        ...state,
        selectedRegionIds: [
          ...state.selectedRegionIds,
          action.regionId,
        ]
      };

    case INC_REGION_COLOR_INDEX:
      return {
        ...state,
        nextRegionColorIndex: action.colorIndex,
      };

    default: 
      return state;
  }
};

export default regionReducer;