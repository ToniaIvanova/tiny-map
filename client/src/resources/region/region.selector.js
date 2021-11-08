const RegionSelector = {
    getRegionTableVisibility: state => state.region.regionTableVisibility,
  
    getSelectedRegionIds: state => state.region.selectedRegionIds,

    getNextRegionColorIndex: state => state.region.nextRegionColorIndex,
  };
  
  export default RegionSelector;