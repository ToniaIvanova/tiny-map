import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionController } from './region.controller';
import { RegionSchema } from './region.model';
import { RegionService } from './region.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'region', schema: RegionSchema }]),
  ],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
