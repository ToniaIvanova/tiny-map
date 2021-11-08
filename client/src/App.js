import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import styles from './styles.module.css';
import { 
  PRODUCT_TAB,
  REGION_TAB,
  CREATE_STATION_TAB,
} from './common/constants/tabs';
import TinyMap from './map/TinyMap';
import ProductChoice from './productChoice/ProductChoice';
import RegionChoice from './regionChoice/RegionChoice';
import NewStation from './newStation/NewStation';
import Header from './Header/Header';

import TabActions from './resources/tab/tab.actions';

const { TabPane } = Tabs;

function App({ changeActiveTab }) {
  const tabChange = (key) => {
    changeActiveTab(key);
  };

  return (
    <div className={styles.app}>
      <TinyMap />
      <div className={styles.menu}>
        <Header />
        <Tabs defaultActiveKey="1" onChange={tabChange} style={{ margin: '0px'}}>
          <TabPane tab="По продуктам" key={PRODUCT_TAB}>
            <ProductChoice />
          </TabPane>
          <TabPane tab="По регионам" key={REGION_TAB}>
            <RegionChoice />
          </TabPane>
          <TabPane tab="Добавить новую станцию" key={CREATE_STATION_TAB}>
            <NewStation/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeActiveTab: TabActions.changeActiveTab,
};

export default connect(null, mapDispatchToProps)(App);
