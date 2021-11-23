const UserSelector = {
  getCurrentUser: state => state.user.currentUser,

  getError: state => state.user.errorType,

  getUserRatings: state => state.user.userRatings,
};

export default UserSelector;