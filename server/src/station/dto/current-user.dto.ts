export class CurrentUser {
  _id: string;
  name: string;
  passwordHash?: string;
  doneStations?: string[];
  done?: boolean;
}
