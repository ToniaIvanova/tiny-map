import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import TinyMap from './map/TinyMap';

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
import LogIn from './LogIn/LogIn';

function App({ currentUser }) {
  return (
    <div className={styles.app}>
      <TinyMap />
      <div className={styles.menu}>
        {currentUser ?
          (<Router>
            <Routes>
              <Route path="/" element={<MainMenu />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>)
          : (<Router>
            <Routes>
              <Route path="/login" element={<LogIn />} />
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
