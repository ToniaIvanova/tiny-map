import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Station } from './interfaces/station.interface';
import { User } from 'src/user/interfaces/user.interface';
import { StationPrepared } from './interfaces/station-prepared.interface';

@Injectable()
export class StationService {
  constructor(
    @InjectModel('station')
    private readonly stationModel: Model<Station>,
    @InjectModel('user')
    private readonly userModel: Model<User>,
  ) {}

  async putDone(
    stationId: string,
    userId: string,
    done: boolean,
  ): Promise<{ stationId: Types.ObjectId }> {
    const user: User = await this.userModel.findOne({ _id: userId });
    const stationObjectId = new Types.ObjectId(stationId);
    const doneIndex: number = user.doneStations.indexOf(stationObjectId);
    if (doneIndex === -1 && done) {
      user.doneStations.push(stationObjectId);
    }

    if (doneIndex !== -1 && !done) {
      user.doneStations.splice(doneIndex, 1);
    }
    user.save();

    return { stationId: stationObjectId };
  }

  async getStationsByProductId(
    productId: string,
    userId: string,
  ): Promise<StationPrepared[]> {
    const stationsData: Station[] = await this.stationModel
      .find({ productId })
      .exec();

    const stationsPrepared: StationPrepared[] = await this.getStationsPrepared(
      stationsData,
      userId,
    );

    return stationsPrepared;
  }

  async getStationsByRegionId(
    regionId: string,
    userId: string,
  ): Promise<StationPrepared[]> {
    const stationsData: Station[] = await this.stationModel
      .find({ regionId })
      .exec();

    const stationsPrepared: StationPrepared[] = await this.getStationsPrepared(
      stationsData,
      userId,
    );

    return stationsPrepared;
  }

  async getStationsPrepared(
    stationsData: Station[],
    userId: string,
  ): Promise<StationPrepared[]> {
    const user: User = await this.userModel.findOne({ _id: userId });

    const stationsPrepared: Array<StationPrepared> = [];
    for (const station of stationsData) {
      const stationId: Types.ObjectId = station._id;
      const done: boolean = user.doneStations.includes(stationId);

      stationsPrepared.push({
        stationName: station.name,
        stationId,
        key: stationId,
        productName: station.productName,
        productId: station.productId,
        regionName: station.regionName,
        regionId: station.regionId,
        place: station.place,
        needCount: station.needCount,
        done,
      });
    }

    return stationsPrepared;
  }
}
