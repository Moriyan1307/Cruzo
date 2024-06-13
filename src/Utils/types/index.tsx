export interface IDateAttributes {
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
}
