import { Types } from 'mongoose';

export class UserForRating {
  _id: Types.ObjectId;
  key: Types.ObjectId;
  name: string;
  rating: number;
}
