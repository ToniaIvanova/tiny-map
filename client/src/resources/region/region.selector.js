const RegionSelector = {
    getRegionTableVisibility: state => state.region.regionTableVisibility,
  
    getSelectedRegionIds: state => state.region.selectedRegionIds,

    getNextRegionColorIndex: state => state.region.nextRegionColorIndex,

    getAllRegions: state => state.region.allRegions,
  };
  
  export default RegionSelector;