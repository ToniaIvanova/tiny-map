import React from 'react';
import { connect } from 'react-redux';
import StationSelector from '../../resources/station/station.selector';
import { Table } from 'antd';
import tableColumns from '../../common/components/tableConfig/tableColumns';

function ProductTable({ selectedByProductStations }) {
  return <Table
    columns={tableColumns}
    dataSource={selectedByProductStations}
    size="middle"
    pagination={{ pageSize: 7 }}
  />;
}

const mapStateToProps = state => ({
  selectedByProductStations: StationSelector.getSelectedByProductStations(state),
});

export default connect(mapStateToProps)(ProductTable);
