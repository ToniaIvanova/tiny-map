import React from 'react';
import ProductSearch from './ProductSearch';
import ProductTable from './ProductTable';
import styles from '../styles.module.css';

export default function ProductChoice({ selectedStations, tableVisability, updateTable }) {
  return <div>
      <ProductSearch updateTable={updateTable} />
      { tableVisability && 
        <ProductTable
          className={styles.table}
          stations={selectedStations}
        /> }
    </div>
}