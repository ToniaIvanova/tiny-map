import React from 'react';
import User from './User';
import Logo from './Logo';
import styles from './Header.module.css';

export default function Header() {
  return <div className={styles.header}>
    <Logo />
    <User />
  </div>
};
