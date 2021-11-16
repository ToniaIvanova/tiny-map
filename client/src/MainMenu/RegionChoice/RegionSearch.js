import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input, AutoComplete } from 'antd';
import styles from './RegionChoice.module.css';

import RegionActions from '../../resources/region/region.actions';
import RegionSelector from '../../resources/region/region.selector';
import UserSelector from '../../resources/user/user.selector';
import StationActions from '../../resources/station/station.actions';

function RegionSearch({
  selectedRegionIds,
  currentUser,
  nextRegionColor,
  allRegionsData,
  incRegionColorIndex,
  switchOnRegionTableVisibility,
  pushSelectedRegionIds,
  pushSelectedByRegionStations,
}) {
  const [regionsInSearch, setRegionsInSearch] = useState([]);
  const [allRegions, setAllRegions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const fetchRegions = async () => {
      const regionsForSearch = allRegionsData.map(region => {
        return {
          value: region._id,
          label: region.name,
        }
      });
      setAllRegions(regionsForSearch);
      setRegionsInSearch(regionsForSearch);
    }
    fetchRegions();
  }, [allRegionsData]);

  const onSelect = regionId => {
    if (regionId && !selectedRegionIds.includes(regionId)) {
      pushSelectedByRegionStations(regionId, currentUser, nextRegionColor);
      switchOnRegionTableVisibility();
      pushSelectedRegionIds(regionId);
      incRegionColorIndex(nextRegionColor);
    }
  };

  const onSearch = regionName => {
    setSelectedValue(regionName);
    const newRegions = allRegions.filter((region) => 
      region.label.toString().toLowerCase().indexOf(regionName.toString().toLowerCase()) > -1
    );
    setRegionsInSearch(newRegions);
  };

  return <div className={styles.search}>
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={regionsInSearch}
      onSelect={onSelect}
      onSearch={onSearch}
      value={selectedValue}
    >
      <Input.Search size="large" placeholder="название региона" enterButton />
    </AutoComplete>
  </div>
};

const mapStateToProps = state => ({
  selectedRegionIds: RegionSelector.getSelectedRegionIds(state),
  nextRegionColor: RegionSelector.getNextRegionColorIndex(state),
  allRegionsData: RegionSelector.getAllRegions(state),

  currentUser: UserSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  switchOnRegionTableVisibility: RegionActions.switchOnRegionTableVisibility,
  pushSelectedRegionIds: RegionActions.pushSelectedRegionId,
  incRegionColorIndex: RegionActions.incRegionColorIndex,

  pushSelectedByRegionStations: StationActions.pushSelectedByRegionStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegionSearch)