import User from './User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);
    return res.jason(user);
  }
}
export default new UserController();
