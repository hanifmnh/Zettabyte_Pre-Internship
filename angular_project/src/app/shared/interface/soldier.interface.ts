export interface SoldierType {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  rank: string;
  maritalStatus: string;
  imageUrl: string;
  addresses: {
    address: string;
    zipcode: number;
    city: string;
    country: string;
  };
}
