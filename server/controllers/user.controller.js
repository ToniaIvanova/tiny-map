import mongoose from "mongoose";
import UserModel from "../storage/models/user.model.js";

class UserController {
  getUserById = async (req, res) => {
    const userId = mongoose.Types.ObjectId(req.params.id);

    const currentUser = await UserModel.findOne({ _id: userId });
  
    res.send(currentUser);
  }
}

export default new UserController();
