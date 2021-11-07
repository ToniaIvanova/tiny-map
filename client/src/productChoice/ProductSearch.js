import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Input, AutoComplete } from 'antd';
import ProductApi from '../api/product.api';
import ProductActions from '../resources/product/product.actions';
import ProductSelector from '../resources/product/product.selector';
import UserSelector from '../resources/user/user.selector';
import StationActions from '../resources/station/station.actions';

function ProductSearch({
  selectedProductIds,
  currentUser,
  switchOnProductTableVisibility,
  pushSelectedProductIds,
  pushSelectedByProductStations,
}) {
  const [productsInSearch, setProductsInSearch] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(async() => {
    const productsData = await ProductApi.getAllProducts();
    const productsForSearch = productsData.data.map(product => {
      return {
        value: product._id,
        label: product.name,
      }
    });
    setAllProducts(productsForSearch);
    setProductsInSearch(productsForSearch);
  }, []);

  const onSelect = productId => {
    if (productId && !selectedProductIds.includes(productId)) {
      pushSelectedByProductStations(productId, currentUser);
      switchOnProductTableVisibility();
      pushSelectedProductIds(productId);
    }
  };

  const onSearch = productName => {
    setSelectedValue(productName);
    const newProducts = allProducts.filter((product) => 
      product.label.toString().toLowerCase().indexOf(productName.toString().toLowerCase()) > -1
    );
    setProductsInSearch(newProducts);
  };

  return <div className="site-input-group-wrapper">
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

  currentUser: UserSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  switchOnProductTableVisibility: ProductActions.switchOnProductTableVisibility,
  pushSelectedProductIds: ProductActions.pushSelectedProductId,

  pushSelectedByProductStations: StationActions.pushSelectedByProductStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch)