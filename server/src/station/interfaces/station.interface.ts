import { Document, Types } from 'mongoose';

export interface Station extends Document {
  readonly name: string;
  readonly productName: string;
  readonly productId: Types.ObjectId;
  readonly regionName: string;
  readonly regionId: Types.ObjectId;
  readonly needCount: number;
  readonly place: number[];
  readonly done?: boolean;
}
