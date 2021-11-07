import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import styles from './styles.module.css';

import TinyMap from './TinyMap';
import ProductChoice from './productChoice/ProductChoice';
import NewStation from './newStation/NewStation';
import Header from './Header/Header';

import UserSelector from './resources/user/user.selector';
import ProductSelector from './resources/product/product.selector';
import ProductActions from './resources/product/product.actions';

const { TabPane } = Tabs;

function App() {
  const tabChange = () => {
    console.log('tab was changed');
  }

  return (
    <div className={styles.app}>
      <TinyMap />
      <div className={styles.menu}>
        <Header />
        <Tabs defaultActiveKey="1" onChange={tabChange} style={{ margin: '0px'}}>
          <TabPane tab="По продуктам" key="1">
            <ProductChoice />
          </TabPane>
          <TabPane tab="По регионам" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Добавить новую станцию" key="3">
            <NewStation/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: UserSelector.getCurrentUser(state),

  selectedProductIds: ProductSelector.getSelectedProductIds(state),
});

const mapDispatchToProps = {
  pushSelectedProductIds: ProductActions.pushSelectedProductId,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
