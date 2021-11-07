import React from 'react';
import User from './User';
import Logo from './Logo'

export default function Header() {
  return <div style={{ 
    width: '100%',
    height: '45px',
    justifyContent: 'space-between',
    display: 'flex',
  }}>
    <Logo />
    <User />
  </div>
};
