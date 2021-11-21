import React from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css';
import TinyMap from './TinyMap/TinyMap';
import Header from './Header/Header';
import 'antd/dist/antd.css';
import './common/common.css';

import {
  Routes,
  Route,
} from "react-router";
import {
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import UserSelector from './resources/user/user.selector';
import MainMenu from './MainMenu/MainMenu';
import Authorization from './Authorization/Authorization';

function App({ currentUser }) {
  return (
    <div className={styles.app}>
      <TinyMap />
      <div className={styles.menu}>
        <Header />
        {currentUser ?
          (<Router>
            <Routes>
              <Route path="/" element={<MainMenu />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>)
          : (<Router>
            <Routes>
              <Route path="/login" element={<Authorization />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Router>)
        }
        
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: UserSelector.getCurrentUser(state),
});

export default connect(mapStateToProps)(App);
