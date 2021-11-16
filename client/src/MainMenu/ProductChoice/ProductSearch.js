import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input, AutoComplete } from 'antd';
import styles from './ProductChoice.module.css';

import ProductActions from '../../resources/product/product.actions';
import ProductSelector from '../../resources/product/product.selector';
import UserSelector from '../../resources/user/user.selector';
import StationActions from '../../resources/station/station.actions';

function ProductSearch({
  selectedProductIds,
  currentUser,
  nextProductColor,
  allProductsData,
  incNextProductColor,
  switchOnProductTableVisibility,
  pushSelectedProductIds,
  pushSelectedByProductStations,
}) {
  const [productsInSearch, setProductsInSearch] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const productsForSearch = allProductsData.map(product => {
        return {
          value: product._id,
          label: product.name,
        }
      });
      setAllProducts(productsForSearch);
      setProductsInSearch(productsForSearch);
    };
    fetchProducts();
  }, [allProductsData]);

  const onSelect = productId => {
    if (productId && !selectedProductIds.includes(productId)) {
      pushSelectedByProductStations(productId, currentUser, nextProductColor);
      switchOnProductTableVisibility();
      pushSelectedProductIds(productId);
      incNextProductColor(nextProductColor);
    }
  };

  const onSearch = productName => {
    setSelectedValue(productName);
    const newProducts = allProducts.filter((product) => 
      product.label.toString().toLowerCase().indexOf(productName.toString().toLowerCase()) > -1
    );
    setProductsInSearch(newProducts);
  };

  return <div className={styles.search}>
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={productsInSearch}
      onSelect={onSelect}
      onSearch={onSearch}
      value={selectedValue}
    >
      <Input.Search size="large" placeholder="название продукта" enterButton />
    </AutoComplete>
  </div>
};

const mapStateToProps = state => ({
  selectedProductIds: ProductSelector.getSelectedProductIds(state),
  nextProductColor: ProductSelector.getNextProductColorIndex(state),
  allProductsData: ProductSelector.getAllProducts(state),

  currentUser: UserSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  switchOnProductTableVisibility: ProductActions.switchOnProductTableVisibility,
  pushSelectedProductIds: ProductActions.pushSelectedProductId,
  incNextProductColor: ProductActions.incProductColorIndex,

  pushSelectedByProductStations: StationActions.pushSelectedByProductStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch)