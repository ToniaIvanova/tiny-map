import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map } from 'react-yandex-maps';
import styles from './TinyMap.module.css';

import { PRODUCT_TAB, REGION_TAB } from '../common/constants/tabs';
import Marks from './Marks';

import StationSelector from '../resources/station/station.selector';
import ProductSelector from '../resources/product/product.selector';
import RegionSelector from '../resources/region/region.selector';
import TabSelector from '../resources/tab/tab.selector';

function TinyMap({
  selectedProductIds,
  selectedByProductStations,

  selectedRegionIds,
  selectedByRegionStations,

  activeTab
}) {
  return <YMaps>
    <Map className={styles.map} defaultState={{ center:[19.441468, 17.496825], zoom: 2 }}>
      { activeTab === PRODUCT_TAB && <Marks
        selectedStations={selectedByProductStations}
        selectedIds={selectedProductIds}
        tab={PRODUCT_TAB}
      />}
      { activeTab === REGION_TAB && <Marks
        selectedStations={selectedByRegionStations}
        selectedIds={selectedRegionIds}
        tab={REGION_TAB}
      />}
    </Map>
  </YMaps>
}

const mapStateToProps = state => ({
  selectedProductIds: ProductSelector.getSelectedProductIds(state),
  selectedByProductStations: StationSelector.getSelectedByProductStations(state),
  
  selectedRegionIds: RegionSelector.getSelectedRegionIds(state),
  selectedByRegionStations: StationSelector.getSelectedByRegionStations(state),

  activeTab: TabSelector.getActiveTab(state),
});

export default connect(mapStateToProps)(TinyMap);