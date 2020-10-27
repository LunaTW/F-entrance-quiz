import axios from 'axios';
import baseURL from './base';

const StudentApi = {
  getAll: async () => {
    const result = await axios.get(`${baseURL}/students`);
    return result.data.students;
  },
};

export default StudentApi;
