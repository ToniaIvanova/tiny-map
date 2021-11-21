import { LOG_OUT } from "./root.types";

const RootAction = {
  logOut: () => dispatch => dispatch({ type: LOG_OUT }),
}
export default RootAction;
