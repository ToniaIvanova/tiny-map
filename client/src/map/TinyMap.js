import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map } from 'react-yandex-maps';
import styles from '../styles.module.css';

import { PRODUCT_TAB, REGION_TAB } from '../common/constants/tabs';
import Marks from './Marks';

import StationSelector from '../resources/station/station.selector';
import TabSelector from '../resources/tab/tab.selector';

function TinyMap({ selectedByProductStations, selectedByRegionStations, activeTab }) {
  return <YMaps>
    <Map className={styles.map} defaultState={{ center:[19.441468, 17.496825], zoom: 2 }}>
      { activeTab === PRODUCT_TAB && <Marks selectedStations={selectedByProductStations}/>}
      { activeTab === REGION_TAB && <Marks selectedStations={selectedByRegionStations}/>}
    </Map>
  </YMaps>
}

const mapStateToProps = state => ({
  selectedByProductStations: StationSelector.getSelectedByProductStations(state),
  selectedByRegionStations: StationSelector.getSelectedByRegionStations(state),
  activeTab: TabSelector.getActiveTab(state),
});

export default connect(mapStateToProps)(TinyMap);