import React from 'react';
import { connect } from 'react-redux';
import StationSelector from '../resources/station/station.selector';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import tableColumns from '../common/components/tableConfig/tableColumns';

function RegionTable({ selectedByRegionStations }) {
  return <Table
    columns={tableColumns}
    dataSource={selectedByRegionStations}
    size="middle"
  />;
}

const mapStateToProps = state => ({
  selectedByRegionStations: StationSelector.getSelectedByRegionStations(state),
});

export default connect(mapStateToProps)(RegionTable);
