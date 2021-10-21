import React, { useState, useEffect } from 'react';
import TinyMap from './TinyMap';
import styles from './styles.module.css';
import ProductChoice from './productChoice/ProductChoice';
import NewStation from './newStation/NewStation';
import User from './User/User';
import { Tabs } from 'antd';

import UserApi from './api/user.api';
import ProductApi from './api/product.api';
const { TabPane } = Tabs;

export default function App() { 
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [selectedStations, setSelectedStations] = useState([]);

  const [selectedRegionNames, setSelectedRegionsNames] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const [tableVisability, setTableVisability] = useState(false);
  const [currentUser, setCurrentUser] = useState(UserApi.currentUser);

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
    setSelectedStations(
      await ProductApi.getProductsByIds({
        productIds: selectedProductIds,
        currentUser: UserApi.currentUser
      }));
    // setSelectedRegions(await getProductsByRegions(selectedRegionNames));
  }, [selectedProductIds, selectedRegionNames]);

  const tabChange = () => {
    console.log('tab was changed');
  }

  const changeCurrentUser = async () => {
    setCurrentUser(await UserApi.getUserById({ id: '60e06fe6ad2cc121d81eb19a' })); // Тонечка
    console.log('currentUser: ', UserApi.currentUser);
  }

  return (
    <div className={styles.app}>
      <TinyMap selectedStations={selectedStations} />
      <div className={styles.menu}>
        <Tabs defaultActiveKey="1" onChange={tabChange}>
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
            <NewStation currentUser={UserApi.currentUser}/>
          </TabPane>
        </Tabs>
       
      </div>
       <User currentUser={currentUser} changeCurrentUser={changeCurrentUser}/>
    </div>
  );

}
