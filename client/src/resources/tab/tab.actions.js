import {
  CHANGE_ACTIVE_TAB,
} from './tab.types';

const TabActions = {
  changeActiveTab: newActiveTabKey => dispatch => dispatch({ type: CHANGE_ACTIVE_TAB, newActiveTabKey }),
};

export default TabActions;