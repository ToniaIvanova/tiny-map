import React from 'react';
import { Tabs } from 'antd';
import {
  LOG_IN,
  SIGN_UP,
} from '../common/constants/tabs';
import LogIn from './LogIn';
import SignUp from './SignUp';

const { TabPane } = Tabs;

function Authorization() {
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

export default Authorization;
