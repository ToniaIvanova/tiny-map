import Guest from '../constants/defaultUser';
import baseApi from './base.api';

class UserApi {
  constructor() {
    this.currentUser = Guest;
  }

  getUserById = async ({ id }) => {
    const user = await baseApi.get(`/user/${id}`);
    if (user) {
      this.currentUser = user.data;
    }
    return this.currentUser;
  };
}

export default new UserApi();