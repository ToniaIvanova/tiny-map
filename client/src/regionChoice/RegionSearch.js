import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../common/components/tableConfig/table.css';
import { Input, AutoComplete } from 'antd';
import RegionApi from '../api/region.api';
import RegionActions from '../resources/region/region.actions';
import RegionSelector from '../resources/region/region.selector';
import UserSelector from '../resources/user/user.selector';
import StationActions from '../resources/station/station.actions';

function RegionSearch({
  selectedRegionIds,
  currentUser,
  nextRegionColor,
  incProductColorIndex,
  switchOnRegionTableVisibility,
  pushSelectedRegionIds,
  pushSelectedByRegionStations,
}) {
  const [regionsInSearch, setRegionsInSearch] = useState([]);
  const [allRegions, setAllRegions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(async() => {
    const regionsData = await RegionApi.getAllRegions();
    const regionsForSearch = regionsData.data.map(region => {
      return {
        value: region._id,
        label: region.name,
      }
    });
    setAllRegions(regionsForSearch);
    setRegionsInSearch(regionsForSearch);
  }, []);

  const onSelect = regionId => {
    if (regionId && !selectedRegionIds.includes(regionId)) {
      pushSelectedByRegionStations(regionId, currentUser, nextRegionColor);
      switchOnRegionTableVisibility();
      pushSelectedRegionIds(regionId);
      incProductColorIndex(nextRegionColor);
    }
    console.log({ selectedRegionIds });
  };

  const onSearch = regionName => {
    setSelectedValue(regionName);
    const newRegions = allRegions.filter((region) => 
      region.label.toString().toLowerCase().indexOf(regionName.toString().toLowerCase()) > -1
    );
    setRegionsInSearch(newRegions);
  };

  return <div className="site-input-group-wrapper">
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

  currentUser: UserSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  switchOnRegionTableVisibility: RegionActions.switchOnRegionTableVisibility,
  pushSelectedRegionIds: RegionActions.pushSelectedRegionId,
  incProductColorIndex: RegionActions.incRegionColorIndex,

  pushSelectedByRegionStations: StationActions.pushSelectedByRegionStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegionSearch)