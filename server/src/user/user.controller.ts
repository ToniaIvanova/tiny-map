import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LogIn } from './dto/login.dto';
import { UserForRating } from './dto/user-for-rating.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('rating')
  async getRating(): Promise<UserForRating[]> {
    return this.userService.getRating();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post('login')
  async logIn(@Body() logIn: LogIn): Promise<User | { errorMessage: string }> {
    return this.userService.logIn(logIn);
  }

  @Post('sign-up')
  async signUp(@Body() logIn: LogIn): Promise<User | { errorMessage: string }> {
    return this.userService.signUp(logIn);
  }
}
