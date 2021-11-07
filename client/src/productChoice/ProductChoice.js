import React from 'react';
import { connect } from 'react-redux';
import ProductSearch from './ProductSearch';
import ProductTable from './ProductTable';
import styles from '../styles.module.css';
import ProductSelector from '../resources/product/product.selector';

function ProductChoice({ productTableVisability }) {
  return <div>
    <ProductSearch />
    { productTableVisability && 
      <ProductTable
        className={styles.table}
      /> }
  </div>
};

const mapStateToProps = state => ({
  productTableVisability: ProductSelector.getProductTableVisibility(state),
});

export default connect(mapStateToProps)(ProductChoice);