const ObjectId = require("mongodb").ObjectId;

class UserController {
  getUserById = async (req, res) => {
    const userId = ObjectId(req.params.id);
  
    const userCollection = req.app.locals.user;
    const currentUser = await userCollection.findOne({ _id: userId });
  
    res.send(currentUser);
  }
}

module.exports = new UserController();