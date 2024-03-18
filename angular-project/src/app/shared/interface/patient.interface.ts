export interface PatientComplaintsType {
  complaint: string;
}

export interface PatientType {
  id: string;
  name: string;
  gender: string;
  age: string;
  address: string;
  contact: string;
  imageUrl: string;
  complaints: PatientComplaintsType[];
}
