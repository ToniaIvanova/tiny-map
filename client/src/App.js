import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TinyMap from './TinyMap';
import styles from './styles.module.css';
import ProductChoice from './productChoice/ProductChoice';
import NewStation from './newStation/NewStation';
import { Tabs } from 'antd';

import ProductApi from './api/product.api';
import Header from './Header/Header';
import UserSelector from './resources/user/user.selector';
const { TabPane } = Tabs;

function App({ currentUser }) { 
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [selectedStations, setSelectedStations] = useState([]);

  const [selectedRegionNames, setSelectedRegionsNames] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const [tableVisability, setTableVisability] = useState(false);

  const updateTable = newProductId => {
    setTableVisability(true);
    if(!selectedProductIds.includes(newProductId)) {
      setSelectedProductIds([
        ...selectedProductIds,
        newProductId,
      ]);
    }
  }

  useEffect(async() => {
    console.log({ currentUser });
    setSelectedStations(
      await ProductApi.getProductsByIds({
        productIds: selectedProductIds,
        currentUser,
      }));
    // setSelectedRegions(await getProductsByRegions(selectedRegionNames));
  }, [selectedProductIds, selectedRegionNames]);

  const tabChange = () => {
    console.log('tab was changed');
  }

  return (
    <div className={styles.app}>
      <TinyMap selectedStations={selectedStations} />
      <div className={styles.menu}>
        <Header />
        <Tabs defaultActiveKey="1" onChange={tabChange} style={{ margin: '0px'}}>
          <TabPane tab="По продуктам" key="1">
            <ProductChoice
              updateTable={updateTable}
              tableVisability={tableVisability}
              selectedStations={selectedStations}
            />
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
});

export default connect(mapStateToProps)(App);
