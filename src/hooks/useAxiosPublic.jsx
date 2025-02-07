import axios from 'axios';

const useAxiosPublic = () => {
  return axios.create({
    baseURL: 'https://myskills-jabir-bhuiyans-projects.vercel.app', // Ensure this matches your backend URL
  });
};

export default useAxiosPublic;
