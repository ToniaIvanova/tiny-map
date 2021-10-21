import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import tableColumns from './tableColumns';

export default function ProductTable({ stations }) {
  return <Table
    columns={tableColumns}
    dataSource={stations}
    size="middle"
  />;
}
