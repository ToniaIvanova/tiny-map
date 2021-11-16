import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Button } from 'antd';
import UserActions from '../resources/user/user.actions';
import UserSelector from '../resources/user/user.selector';
import styles from './Header.module.css';

function User({ currentUser, setCurrentUser }) {

  const changeUser = () => {
    // setCurrentUser('60e06fe6ad2cc121d81eb19a'); // Тонечка
  };

  return <div className={styles.user}>
    <Button
      size="small"
      onClick={changeUser}
      className={styles['user-button']}>
      Сменить власть
    </Button>
    <Avatar size={50} className={styles.avatar}>
        {currentUser ? currentUser.name : 'Гость'}
    </Avatar>
  </div>
};

const mapStateToProps = state => ({
  currentUser: UserSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  setCurrentUser: UserActions.setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User)