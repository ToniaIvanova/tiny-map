import { Document, Schema } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly stations: Schema.Types.ObjectId[];
}
