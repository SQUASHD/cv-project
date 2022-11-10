import { v4 as uuidv4 } from 'uuid';

const emptyCV = {
  personal: {
    name: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  },
  experience: [
    {
      id: uuidv4(),
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ],
  education: [
    {
      id: uuidv4(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ],
};

export default emptyCV;
