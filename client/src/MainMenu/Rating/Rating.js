import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import UserSelector from '../../resources/user/user.selector';
import UserActions from '../../resources/user/user.actions';
import tableColumns from './tableColumns';

function Rating({ currentUser, userRatings, getRating }){
  useEffect(() => {
    getRating();
  }, [userRatings, getRating]);

  return <Table
    columns={tableColumns}
    dataSource={userRatings}
    size="middle"
    pagination={{ pageSize: 7 }}
  />
};

const mapStateToProps = state => ({
  currentUser: UserSelector.getCurrentUser(state),
  userRatings: UserSelector.getUserRatings(state),
});

const mapDispatchToProps = {
  getRating: UserActions.getRating,
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
