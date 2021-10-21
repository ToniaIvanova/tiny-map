import { Switch } from "antd";
import StationApi from "../api/station.api";
import UserApi from "../api/user.api";

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
  },
  {
    title: 'Need Count',
    dataIndex: 'needCount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.needCount - b.needCount,
  },
  {
    title: 'Done',
    render: station => {
      function onChange(checked) {
        StationApi.putStationDone({
          stationId: station._id,
          currentUser: UserApi.currentUser,
          checked
        });
      }

      if (station.done) {
        return <Switch onChange={onChange} defaultChecked/>
      }
      return <Switch onChange={onChange} />;
    }
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