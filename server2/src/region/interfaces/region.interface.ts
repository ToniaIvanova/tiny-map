import { Document, Schema } from 'mongoose';

export interface Region extends Document {
  readonly name: string;
  readonly stations: Schema.Types.ObjectId[];
}
