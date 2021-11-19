import { Document } from 'mongoose';

export interface Station extends Document {
  readonly name: string;
  readonly productId: string;
  readonly needCount: number;
  readonly regionId: string;
  readonly place: number[];
  readonly done?: boolean;
  readonly productName: string;
  readonly regionName: string;
}
