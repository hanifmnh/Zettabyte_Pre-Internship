export interface SoldierAddressType {
  address: string;
  zipcode: number;
  city: string;
  country: string;
}

export interface SoldierEmergencyContactType {
  name: string;
  phoneNumber: string;
}

export interface SoldierType {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  rank: string;
  maritalStatus: string;
  imageUrl: string;
  addresses: SoldierAddressType[];
  emergencyContact: SoldierEmergencyContactType[];
}
