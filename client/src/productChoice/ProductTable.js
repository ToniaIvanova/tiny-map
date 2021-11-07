import React from 'react';
import { connect } from 'react-redux';
import StationSelector from '../resources/station/station.selector';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import tableColumns from './tableColumns';

function ProductTable({ selectedByProductStations }) {
  console.log({ selectedByProductStations });
  return <Table
    columns={tableColumns}
    dataSource={selectedByProductStations}
    size="middle"
  />;
}

const mapStateToProps = state => ({
  selectedByProductStations: StationSelector.setSelectedByProductStations(state),
});

export default connect(mapStateToProps)(ProductTable);
