import {
  SWITCH_ON_REGION_TABLE_VISIBILITY,
  PUSH_SELECTED_REGION_ID,
  DELETE_SELECTED_REGION_ID,
  GET_ALL_REGIONS,
} from './region.types';
import { colors } from '../../common/constants/colors';

const initialState = {
  regionTableVisibility: false,
  selectedRegionIds: [],
  freeColors: [...colors],
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

    case PUSH_SELECTED_REGION_ID: {
      const color = state.freeColors.pop();
      return {
        ...state,
        selectedRegionIds: [
          ...state.selectedRegionIds,
          {
            regionId: action.regionId,
            color,
          }
        ]
      };
    }

    case DELETE_SELECTED_REGION_ID: {
      const newSelectedRegionIds = state.selectedRegionIds;
      const newFreeColors = state.freeColors;

      const indexForDelete = state.selectedRegionIds.findIndex(regionData => {
        return regionData.regionId === action.regionId;
      });
      const regionForDelete = newSelectedRegionIds.splice(indexForDelete, 1);
      newFreeColors.push(regionForDelete[0].color);

      return {
        ...state,
        selectedRegionIds: newSelectedRegionIds,
        freeColors: newFreeColors,
      };
    }

    default: 
      return state;
  }
};

export default regionReducer;