import { Timestamp } from "firebase/firestore";
import dayjs, { Dayjs } from "dayjs";

export interface IDateAttributes {
  id: string;
  date: string;
  day: string;
  rideDetails: IRideAttributes[];
}

export interface IRideAttributes {
  from: string;
  to: string;
  amount: number;
  miles: number;
  toll: number;
  phone: number;
  time: Timestamp;
  name: string;
}
