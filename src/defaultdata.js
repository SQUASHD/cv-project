import { v4 as uuidv4 } from 'uuid';

const data = {
  personal: {
    name: 'John Doe',
    title: 'Senior Developer',
    email: 'john.doe@itcompany.com',
    phone: '555-555-5555',
    address: '123 Main St',
    city: 'New York, NY',
  },
  experience: [
    {
      id: uuidv4(),
      position: 'Senior Developer',
      company: 'IT Company',
      startDate: '2019',
      endDate: 'Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: uuidv4(),
      position: 'Junior Developer',
      company: 'Another IT Company',
      startDate: '2017',
      endDate: '2019',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
  education: [
    {
      id: uuidv4(),
      school: 'University of Life',
      degree: 'BSc Computer Science',
      startDate: '2012',
      endDate: '2015',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: uuidv4(),
      school: 'Regular High School',
      degree: 'High School Diploma',
      startDate: '2008',
      endDate: '2012',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
};

export default data;
