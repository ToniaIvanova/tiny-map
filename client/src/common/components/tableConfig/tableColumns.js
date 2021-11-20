import StationDoneSwitch from "./StationDoneSwitch";

const tableColumns = [
  {
    title: 'Продукт',
    dataIndex: 'productName',
    sorter: (a, b) => {
      if (a.productName > b.productName) {
        return 1;
      }
      return -1;
    },
  },
  {
    title: 'Станция',
    dataIndex: 'stationName',
    sorter: (a, b) => {
      if (a.stationName > b.stationName) {
        return 1;
      }
      return -1;
    },
  },
  {
    title: 'Нужно',
    dataIndex: 'needCount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.needCount - b.needCount,
  },
  {
    title: 'Выполнено',
    render: station => <StationDoneSwitch station={station} />,
    filters: [
      {
        text: 'Done',
        value: true,
      },
      {
        text: 'Not Done',
        value: false,
      },
    ],
    onFilter: (value, station) => station.done === value,
  },
  {
    title: 'Регион',
    dataIndex: 'regionName',
    sorter: (a, b) => {
      if (a.region > b.region) {
        return 1;
      }
      return -1;
    },
  },
];

export default tableColumns;