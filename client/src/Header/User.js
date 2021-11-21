import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styles from './Header.module.css';

import UserSelector from '../resources/user/user.selector';
import RootAction from '../resources/root.action';

function User({ currentUser, logOut }) {

  const changeUser = () => {
    logOut();
    localStorage.setItem('user-token', '');
  };

  return <div className={styles.user}>
    <Popconfirm
      title="Хотите уйти"
      icon={<QuestionCircleOutlined style={{ color: 'red' }}/>}
      onConfirm={changeUser}
    >
      <Button
        size="small"
        className={styles['user-button']}>
        Сменить власть
      </Button>
    </Popconfirm>
    <Avatar size={50} className={styles.avatar}>
        {currentUser ? currentUser.name : 'Гость'}
    </Avatar>
  </div>
}

const mapStateToProps = state => ({
  currentUser: UserSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  logOut: RootAction.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(User)