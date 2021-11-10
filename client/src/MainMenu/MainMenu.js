import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import {
  PRODUCT_TAB,
  REGION_TAB,
  CREATE_STATION_TAB,
} from '../common/constants/tabs';
import ProductChoice from '../productChoice/ProductChoice';
import RegionChoice from '../regionChoice/RegionChoice';
import NewStation from '../newStation/NewStation';
import Header from '../Header/Header';
import TabActions from '../resources/tab/tab.actions';

const { TabPane } = Tabs;

function MainMenu({ changeActiveTab }) {
  const tabChange = (key) => {
    changeActiveTab(key);
  };

  return <div>
    <Header />
    <Tabs defaultActiveKey="1" onChange={tabChange} style={{ margin: '0px' }}>
      <TabPane tab="По продуктам" key={PRODUCT_TAB}>
        <ProductChoice />
      </TabPane>
      <TabPane tab="По регионам" key={REGION_TAB}>
        <RegionChoice />
      </TabPane>
      <TabPane tab="Добавить новую станцию" key={CREATE_STATION_TAB}>
        <NewStation />
      </TabPane>
    </Tabs>
  </div>
}

const mapDispatchToProps = {
  changeActiveTab: TabActions.changeActiveTab,
}

export default connect(null, mapDispatchToProps)(MainMenu);
