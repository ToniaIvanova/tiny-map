import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import {
  LOG_IN,
  SIGN_UP,
} from '../common/constants/tabs';
import LogIn from './LogIn';
import SignUp from './SignUp';
import UserActions from '../resources/user/user.actions';
import ProductActions from '../resources/product/product.actions';
import RegionActions from '../resources/region/region.actions';

const { TabPane } = Tabs;

function Authorization({
  getProdileByToken,
  getAllProducts,
  getAllRegions,
}) {
  useEffect(() => {
    getProdileByToken(localStorage.getItem('user-token'));
    getAllProducts();
    getAllRegions();
  }, [getAllProducts, getAllRegions, getProdileByToken]);

  return <div>
    <Tabs>
      <TabPane tab="Вход" key={LOG_IN}>
        <LogIn />
      </TabPane>
      <TabPane tab="Регистрация" key={SIGN_UP}>
        <SignUp />
      </TabPane>
    </Tabs>
  </div>
}

const mapDispatchToProps = {
  getProdileByToken: UserActions.getProdileByToken,
  getAllProducts: ProductActions.getAllProducts,
  getAllRegions: RegionActions.getAllRegions,
}

export default connect(null, mapDispatchToProps)(Authorization);
