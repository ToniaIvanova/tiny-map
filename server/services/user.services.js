import bcrypt, { hash } from 'bcrypt';
import UserModel from "../storage/models/user.model.js";

class UserServices {
  getById = async id => {
    return UserModel.aggregate([
      { $match: { _id: id } },
      { $project: { _id: 1, name: 1 } }
    ]);
  }

  resetPassword = async (name, password) => {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function(err, passwordHash) {

      await UserModel.updateOne(
        { name },
        { $set: { passwordHash } },
      );
    });
    return {};
  }

  signUp = async (name, password) => {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function(err, passwordHash) {
      await UserModel.insertOne({
        name,
        passwordHash,
      })
    });
    return {};
  }

  comparePasswords = (password, hash) => new Promise((res, rej) => {
    bcrypt.compare(password, hash, function(error, result) {
      if (error) {
        return rej(error);
      }
      return res(result);
    });
  })

  logIn = async (name, password) => {
    const userByName = await UserModel.findOne({ name });
    if (!userByName) {
      return { err: 'USER_NOT_EXIST' };
    }
    const result = await this.comparePasswords(password, userByName.passwordHash);

    return result.err ? result : userByName;
  }
}

export default new UserServices();