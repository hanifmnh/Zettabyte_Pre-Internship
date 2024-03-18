import { PatientType } from '../interface/patient.interface';

export const patients: PatientType[] = [
  {
    id: '001',
    name: 'John Doe',
    gender: 'Male',
    age: '35',
    address: '123 Main Street',
    contact: '081234567890',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/18/18148.png',
    complaints: [
      {
        complaint: 'Headache',
      },
      {
        complaint: 'Fever',
      },
    ],
  },
  {
    id: '002',
    name: 'Jane Smith',
    gender: 'Female',
    age: '28',
    address: '456 Oak Avenue',
    contact: '081298765432',
    imageUrl:
      'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_female-512.png',
    complaints: [
      {
        complaint: 'Stomach pain',
      },
    ],
  },
  {
    id: '003',
    name: 'Michael Johnson',
    gender: 'Male',
    age: '45',
    address: '789 Elm Street',
    contact: '081234561234',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/18/18148.png',
    complaints: [
      {
        complaint: 'Cough',
      },
      {
        complaint: 'Sore throat',
      },
    ],
  },
  {
    id: '004',
    name: 'Emily Williams',
    gender: 'Female',
    age: '22',
    address: '101 Pine Street',
    contact: '081287654321',
    imageUrl:
      'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_female-512.png',
    complaints: [
      {
        complaint: 'Back pain',
      },
    ],
  },
  {
    id: '005',
    name: 'David Brown',
    gender: 'Male',
    age: '40',
    address: '222 Cedar Avenue',
    contact: '081212345678',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/18/18148.png',
    complaints: [
      {
        complaint: 'Fatigue',
      },
      {
        complaint: 'Joint pain',
      },
    ],
  },
  {
    id: '006',
    name: 'Emma Taylor',
    gender: 'Female',
    age: '30',
    address: '333 Maple Drive',
    contact: '081256789012',
    imageUrl:
      'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_female-512.png',
    complaints: [
      {
        complaint: 'Nausea',
      },
    ],
  },
  {
    id: '007',
    name: 'Daniel Martinez',
    gender: 'Male',
    age: '50',
    address: '444 Walnut Lane',
    contact: '081234567890',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/18/18148.png',
    complaints: [
      {
        complaint: 'Dizziness',
      },
    ],
  },
  {
    id: '008',
    name: 'Olivia Garcia',
    gender: 'Female',
    age: '25',
    address: '555 Oak Street',
    contact: '081290123456',
    imageUrl:
      'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_female-512.png',
    complaints: [
      {
        complaint: 'Insomnia',
      },
      {
        complaint: 'Anxiety',
      },
    ],
  },
  {
    id: '009',
    name: 'James Rodriguez',
    gender: 'Male',
    age: '38',
    address: '666 Pine Avenue',
    contact: '081234567890',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/18/18148.png',
    complaints: [
      {
        complaint: 'Shortness of breath',
      },
    ],
  },
  {
    id: '010',
    name: 'Sophia Hernandez',
    gender: 'Female',
    age: '27',
    address: '777 Elm Drive',
    contact: '081278901234',
    imageUrl:
      'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_female-512.png',
    complaints: [
      {
        complaint: 'Allergies',
      },
      {
        complaint: 'Runny nose',
      },
    ],
  },
];
