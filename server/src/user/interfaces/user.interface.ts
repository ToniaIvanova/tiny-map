import { Document, Types } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly passwordHash: string;
  readonly doneStations: Types.ObjectId[];
  readonly isAdmin: boolean;
}
