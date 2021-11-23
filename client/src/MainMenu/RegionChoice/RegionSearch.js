import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Select, Tag } from 'antd';
import styles from './RegionChoice.module.css';

import { getColor } from '../../common/getColor';

import RegionActions from '../../resources/region/region.actions';
import RegionSelector from '../../resources/region/region.selector';
import UserSelector from '../../resources/user/user.selector';
import StationActions from '../../resources/station/station.actions';

function RegionSearch({
  selectedRegionIds,
  nextRegionColor,
  allRegionsData,
  currentUser,

  switchOnRegionTableVisibility,
  pushSelectedRegionId,
  deleteSelectedRegionId,
  pushSelectedByRegionStations,
  deleteSelectedByRegionStations,
}) {
  const [regionsInSearch, setRegionsInSearch] = useState([]);

  useEffect(() => {
    const regionsForSearch = allRegionsData.map(region => ({
      value: region._id,
      label: region.name,
    }));
    setRegionsInSearch(regionsForSearch);
  }, [allRegionsData]);

  const onSelect = regionId => {
    if (regionId && !selectedRegionIds.includes(regionId)) {
      pushSelectedRegionId(regionId);
      pushSelectedByRegionStations(regionId, currentUser);
      switchOnRegionTableVisibility();
    }
  };
  
  const onDeselect = regionId => {
    deleteSelectedRegionId(regionId);
    const regionForDelete = allRegionsData.find(region => region._id === regionId);
    deleteSelectedByRegionStations(regionForDelete);
  }

  const tagRender = (props) => {
    const { label, closable, onClose, value } = props;
    const onPreventMouseDown = event => {
      event.preventDefault();
      event.stopPropagation();
    };
    const color = getColor(selectedRegionIds, value);
    return (
      <Tag
        color={color}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }

  return <div className={styles.search}>
    <Select
      mode="multiple"
      size="large"
      showArrow
      style={{ width: '100%' }}
      placeholder="выберите регион"
      tagRender={tagRender}
      options={regionsInSearch}
      onSelect={onSelect}
      onDeselect={onDeselect}
    />
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
  pushSelectedRegionId: RegionActions.pushSelectedRegionId,
  deleteSelectedRegionId: RegionActions.deleteSelectedRegionId,

  pushSelectedByRegionStations: StationActions.pushSelectedByRegionStations,
  deleteSelectedByRegionStations: StationActions.deleteSelectedByRegionStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegionSearch)