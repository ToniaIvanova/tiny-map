import { Types } from 'mongoose';

export class StationPrepared {
  stationId: Types.ObjectId;
  key: Types.ObjectId;
  stationName: string;
  productName: string;
  region: string;
  needCount: number;
  place: number[];
  done: boolean;
}
