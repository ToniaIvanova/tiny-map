import { Types } from 'mongoose';

export class StationPrepared {
  stationName: string;
  stationId: Types.ObjectId;
  key: Types.ObjectId;
  productName: string;
  productId: Types.ObjectId;
  regionName: string;
  regionId: Types.ObjectId;
  needCount: number;
  place: number[];
  done: boolean;
}
