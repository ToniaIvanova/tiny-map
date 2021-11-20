import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Select, Tag } from 'antd';
import styles from './ProductChoice.module.css';

import { getColor } from '../../common/getColor';

import ProductActions from '../../resources/product/product.actions';
import ProductSelector from '../../resources/product/product.selector';
import UserSelector from '../../resources/user/user.selector';
import StationActions from '../../resources/station/station.actions';

function ProductSearch({
  selectedProductIds,
  nextProductColor,
  allProductsData,
  currentUser,

  switchOnProductTableVisibility,
  pushSelectedProductIds,
  deleteSelectedProductId,
  pushSelectedByProductStations,
  deleteSelectedByProductStations,
}) {
  const [productsInSearch, setProductsInSearch] = useState([]);

  useEffect(() => {
    const productsForSearch = allProductsData.map(product => ({
      value: product._id,
      label: product.name,
    }));
    setProductsInSearch(productsForSearch);
  }, [allProductsData]);

  const onSelect = productId => {
    if (productId && !selectedProductIds.includes(productId)) {
      pushSelectedByProductStations(productId, currentUser, nextProductColor);
      switchOnProductTableVisibility();
      pushSelectedProductIds(productId);
    }
  };
  
  const onDeselect = productId => {
    deleteSelectedProductId(productId);
    const productForDelete = allProductsData.find(product => product._id === productId);
    deleteSelectedByProductStations(productForDelete);
  }

  const tagRender = (props) => {
    const { label, closable, onClose, value } = props;
    const onPreventMouseDown = event => {
      event.preventDefault();
      event.stopPropagation();
    };
    const color = getColor(selectedProductIds, value);
    return (
      <Tag
        color={color}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }

  return <div className={styles.search}>
    <Select
      mode="multiple"
      size="large"
      showArrow
      style={{ width: '100%' }}
      placeholder="выберете продукт"
      tagRender={tagRender}
      options={productsInSearch}
      onSelect={onSelect}
      onDeselect={onDeselect}
    />
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
  deleteSelectedProductId: ProductActions.deleteSelectedProductId,

  pushSelectedByProductStations: StationActions.pushSelectedByProductStations,
  deleteSelectedByProductStations: StationActions.deleteSelectedByProductStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch)