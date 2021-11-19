import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Region } from './interfaces/region.interface';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel('region')
    private readonly regionModel: Model<Region>,
  ) {}

  async findAll(): Promise<Region[]> {
    return this.regionModel
      .aggregate([{ $project: { stations: 0 } }, { $sort: { name: 1 } }])
      .exec();
  }
}
