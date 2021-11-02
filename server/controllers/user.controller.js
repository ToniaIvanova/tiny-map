import UserModel from "../storage/models/user.model.js";

class UserController {
  getUserById = async (req, res) => {
    const { id } = req.params;

    const currentUser = await UserModel.findOne({ _id: id });

    return res.send(currentUser);
  }
}

export default new UserController();
