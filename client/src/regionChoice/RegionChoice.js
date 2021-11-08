import React from 'react';
import { connect } from 'react-redux';
import RegionSearch from './RegionSearch';
import RegionTable from './RegionTable';
import styles from '../styles.module.css';
import RegionSelector from '../resources/region/region.selector';

function RegionChoice({ regionTableVisability }) {
  return <div>
    <RegionSearch />
    { regionTableVisability && 
      <RegionTable
        className={styles.table}
      /> }
  </div>
};

const mapStateToProps = state => ({
    regionTableVisability: RegionSelector.getRegionTableVisibility(state),
});

export default connect(mapStateToProps)(RegionChoice);