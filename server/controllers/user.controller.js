import UserServices from "../services/user.services.js";
import { userNameValidation } from '../validation/user.validation.js'; 

class UserController {
  getUserById = async (req, res) => {
    const { id } = req.params;

    const currentUser = await UserServices.getById(id);

    return res.send(currentUser);
  }

  resetPassword = async (req, res) => {
    const { username, password } = req.body;

    await UserServices.resetPassword(username, password);

    return res.send({});
  }

  signUp = async (req, res) => {
    const { username, password } = req.body;

    await userNameValidation(username);

    await UserServices.signUp(username, password);

    return res.send({});
  }

  logIn = async (req, res) => {
    const { username, password } = req.body;

    const result = await UserServices.logIn(username, password);
    if (result.err) {
      return res.status(401).send({ result });
    }
    return res.send(result);
  }
}

export default new UserController();
