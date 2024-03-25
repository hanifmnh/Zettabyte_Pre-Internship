export interface MentorType {
  _id: string;
  email: string;
  civility: string;
  first_name: string;
  last_name: string;
  company: MentorCompanyType;
  user_status: string;
  count_document: number;
}

export interface MentorCompanyType {
  name: string;
  user_type: string;
}
