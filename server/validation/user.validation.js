import chalk from "chalk";
import UserModel from "../storage/models/user.model.js";

const userNameValidation = async userName => {
  try {
    const userInBase = await UserModel.findOne({ name: userName });
  
    if (userInBase) {
      throw `User with name ${userName} is already exist`;
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
};

export { userNameValidation };