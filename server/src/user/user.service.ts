import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { LogIn } from './dto/login.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user')
    private readonly userModel: Model<User>,
    private readonly authService: AuthService,
  ) {}

  async findById(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }, { _id: 1, name: 1 }).exec();
  }

  async findByName(name: string): Promise<User> {
    return this.userModel.findOne({ name }).exec();
  }

  async signUp(logIn: LogIn) {
    const { username, password } = logIn;
    const isUsernameExist: boolean = await this.isUsernameExist(username);

    if (isUsernameExist) {
      return { errorMessage: 'USERNAME_EXIST' };
    }
    const saltRounds = 10;
    const passwordHash: string = await bcrypt.hash(password, saltRounds);

    const newUser: User = await this.userModel.create({
      name: username,
      passwordHash,
      doneStations: [],
      isAdmin: false,
    });
    newUser.access_token = await this.getToken(newUser);

    return newUser;
  }

  async logIn(logIn: LogIn): Promise<User | { errorMessage: string }> {
    const { username, password } = logIn;
    const userByName: User = await this.findByName(username);

    if (!userByName) {
      return { errorMessage: 'USER_NOT_EXIST' };
    }
    const isMatch: boolean = await bcrypt.compare(
      password,
      userByName.passwordHash,
    );
    if (isMatch) {
      userByName.access_token = await this.getToken(userByName);
      return userByName;
    }
    return { errorMessage: 'WRONG_PASSWORD' };
  }

  async getToken(user: User): Promise<string> {
    return this.authService.generateJwt(user);
  }

  async isUsernameExist(name: string): Promise<boolean> {
    const allUsers: User[] = await this.userModel.find().exec();
    return allUsers.find((user) => user.name === name) ? true : false;
  }
}
