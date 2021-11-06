import { Switch } from "antd";
import { connect } from 'react-redux';
import UserSelector from '../resources/user/user.selector';
import StationApi from '../api/station.api';
import Guest from "../constants/defaultUser";

function DoneSwitch({ station, currentUser }) {
  function onChange(checked) {
    StationApi.putStationDone({
      stationId: station.stationId,
      currentUser,
      done: checked,
    });
  }

  if (currentUser === Guest) {
    return <div></div>
  }
  if (station.done) {
    return <Switch onChange={onChange} defaultChecked/>
  }
  return <Switch onChange={onChange} />
}

const mapStateToProps = state => ({
  currentUser: UserSelector.getCurrentUser(state),
});

export default connect(mapStateToProps)(DoneSwitch);