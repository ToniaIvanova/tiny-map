import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { LogIn } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user')
    private readonly userModel: Model<User>,
  ) {}

  async findById(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }, { _id: 1, name: 1 }).exec();
  }

  async signUp(logIn: LogIn) {
    const { username, password } = logIn;
    const allUsers: User[] = await this.userModel.find().exec();
    const isUsernameExist: boolean = allUsers.find(
      (user) => user.name === username,
    )
      ? true
      : false;
    if (isUsernameExist) {
      return { errorMessage: 'USERNAME_EXIST' };
    }
    const saltRounds = 10;
    const passwordHash: string = await bcrypt.hash(password, saltRounds);

    return this.userModel.create({
      name: username,
      passwordHash,
      doneStations: [],
      isAdmin: false,
    });
  }

  async logIn(logIn: LogIn) {
    const { username, password } = logIn;
    const userByName: User = await this.userModel.findOne({ name: username });

    if (!userByName) {
      return { errorMessage: 'USER_NOT_EXIST' };
    }
    const isMatch: boolean = await bcrypt.compare(
      password,
      userByName.passwordHash,
    );

    return isMatch ? userByName : { errorMessage: 'WRONG_PASSWORD' };
  }
}
