import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';
import regionReducer from './region/region.reducer';
import stationReducer from './station/station.reducer';
import tabReducer from './tab/tab.reducer';

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  region: regionReducer,
  station: stationReducer,
  tab: tabReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;