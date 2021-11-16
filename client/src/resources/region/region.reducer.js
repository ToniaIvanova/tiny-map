import {
  SWITCH_ON_REGION_TABLE_VISIBILITY,
  PUSH_SELECTED_REGIONS_ID,
  INC_REGION_COLOR_INDEX,
  GET_ALL_REGIONS,
} from './region.types';

const initialState = {
  regionTableVisibility: false,
  selectedRegionIds: [],
  nextRegionColorIndex: 0,
  allRegions: [],
}

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REGIONS: 
      return {
        ...state,
        allRegions: action.regions,
      }
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