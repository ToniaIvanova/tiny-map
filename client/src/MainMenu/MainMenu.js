import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import styles from './MainMenu.module.css';
import {
  PRODUCT_TAB,
  REGION_TAB,
  CREATE_STATION_TAB,
} from '../common/constants/tabs';
import ProductChoice from './ProductChoice/ProductChoice';
import RegionChoice from './RegionChoice/RegionChoice';
import NewStation from './NewStation/NewStation';
import TabActions from '../resources/tab/tab.actions';
import UserSelector from '../resources/user/user.selector';

const { TabPane } = Tabs;

function MainMenu({ currentUser, changeActiveTab }) {
  const tabChange = key => {
    changeActiveTab(key);
  };

  return <div>
    <Tabs defaultActiveKey="1" onChange={tabChange} className={styles.tabs}>
      <TabPane tab="По продуктам" key={PRODUCT_TAB}>
        <ProductChoice />
      </TabPane>
      <TabPane tab="По регионам" key={REGION_TAB}>
        <RegionChoice />
      </TabPane>
      {currentUser.isAdmin && <TabPane tab="Добавить новую станцию" key={CREATE_STATION_TAB}>
        <NewStation />
      </TabPane>}
    </Tabs>
  </div>
}

const mapStateToProps = state => ({
  currentUser: UserSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  changeActiveTab: TabActions.changeActiveTab,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
