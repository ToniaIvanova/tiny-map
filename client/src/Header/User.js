import React from 'react';
import { Avatar, Button } from 'antd';

export default function User({ currentUser, changeCurrentUser }) {
  const changeUser = () => {
    changeCurrentUser();
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
        {currentUser.name}
    </Avatar>
    
  </div>
}