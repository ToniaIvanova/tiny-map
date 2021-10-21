import React from 'react';
import { Avatar, Button } from 'antd';

export default function User({ currentUser, changeCurrentUser }) {
  const changeUser = () => {
    changeCurrentUser();
  };

  return <div style={{
      display: 'flex',
      'flexFlow': 'column wrap'
    }}>
    <Avatar size={64} style={{
        backgroundColor: '#1890ff',
        verticalAlign: 'middle'
      }}>
        {currentUser.name}
    </Avatar>
    <Button size="small" onClick={changeUser}
      style={{
        verticalAlign: 'middle',
      }}>
      Сменить власть
    </Button>
  </div>
}