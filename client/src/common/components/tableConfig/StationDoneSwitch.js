import { Switch } from "antd";
import { connect } from 'react-redux';
import UserSelector from '../../../resources/user/user.selector';
import StationActions from "../../../resources/station/station.actions";

function DoneSwitch({ station, currentUser, updateStationDone }) {
  function onChange(checked) {
    updateStationDone({
      stationId: station.stationId,
      currentUser,
      done: checked,
    });
  }

  if (!currentUser) {
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

const mapDispatchToProps = {
  updateStationDone: StationActions.updateStationDone,
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneSwitch);