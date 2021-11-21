import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EnvModule } from '../env.module';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtStrategy } from './jwt.stategy';

const { SECRET_KEY } = process.env;

@Module({
  imports: [
    EnvModule,
    JwtModule.register({
      secret: SECRET_KEY,
      signOptions: { expiresIn: '123456s' },
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
