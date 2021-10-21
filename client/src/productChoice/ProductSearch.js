import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input, AutoComplete } from 'antd';
import ProductApi from '../api/product.api';

export default function ProductSearch({ updateTable }) {
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
    if (productId) {
      updateTable(productId);
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
