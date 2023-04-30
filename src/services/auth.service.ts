import AuthModel from '../model/user.model';
import { IAUTH, ILogin } from '../types/auth.interface';
import bcrypt from 'bcrypt';

class AuthService {
  private authmodel = AuthModel;

  public async register(data: IAUTH) {
    try {
      const { email, password, username, firstname, story } = data;

      const user = await this.authmodel.find({
        $or: [{ email }, { username }],
      });

      if (!user) throw new Error('This email or username already registered!');

      const hashPass = await bcrypt.hash(password, 10);

      const newUser = new this.authmodel({
        email,
        username,
        firstname,
        password: hashPass,
        story,
      });

      await newUser.save();

      return newUser;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async login(data: ILogin) {
    try {
      const { email, password } = data;

      const user = await this.authmodel.findOne({ email });

      if (!user) throw new Error('This email or password is exists');

      const checkPass = await bcrypt.compare(password, user.password);

      if (!checkPass) throw new Error('This email or password is exists');

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default AuthService;
