import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Button } from 'antd';
import UserActions from '../resources/user/user.actions';
import UserSelector from '../resources/user/user.selector';

function User({ currentUser, setCurrentUser }) {
  const changeUser = () => {
    setCurrentUser('60e06fe6ad2cc121d81eb19a');
  };

  return <div style={{
      display: 'inline-block',
      'flexFlow': 'column wrap',
      float: 'right',
    }}>
    <Button size="small" onClick={changeUser}
      style={{
        verticalAlign: 'middle',
        margin: '5px',
        border: 'none',
      }}>
      Сменить власть
    </Button>
    <Avatar size={50} style={{
        backgroundColor: '#1890ff',
        verticalAlign: 'middle'
      }}>
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