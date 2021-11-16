import StationDoneSwitch from "./StationDoneSwitch";

const tableColumns = [
  {
    title: 'Product Name',
    dataIndex: 'productName',
    sorter: (a, b) => {
      if (a.productName > b.productName) {
        return 1;
      }
      return -1;
    },
  },
  {
    title: 'Station Name',
    dataIndex: 'stationName',
    sorter: (a, b) => {
      if (a.stationName > b.stationName) {
        return 1;
      }
      return -1;
    },
  },
  {
    title: 'Need Count',
    dataIndex: 'needCount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.needCount - b.needCount,
  },
  {
    title: 'Done',
    render: station => <StationDoneSwitch station={station} />
  },
  {
    title: 'region',
    dataIndex: 'region',
    sorter: (a, b) => {
      if (a.region > b.region) {
        return 1;
      }
      return -1;
    },
  },
];

export default tableColumns;