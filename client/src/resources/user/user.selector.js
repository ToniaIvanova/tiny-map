const UserSelector = {
  getCurrentUser: state => state.user.currentUser,

  getError: state => state.user.errorType,
};

export default UserSelector;