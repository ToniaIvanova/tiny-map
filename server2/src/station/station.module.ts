import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { StationController } from './station.controller';
import { StationSchema } from './station.model';
import { StationService } from './station.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'station', schema: StationSchema }]),
    UserModule,
  ],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}
