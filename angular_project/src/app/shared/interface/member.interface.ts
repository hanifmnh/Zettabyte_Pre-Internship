export interface MemberType {
  id: string;
  fullname: string;
  nickname: string;
  age: number;
  email: string;
  instagram: string;
  role: string;
  imageUrl: string;
  addresses: {
    address: string;
    zipcode: number;
    city: string;
    country: string;
  };
}
