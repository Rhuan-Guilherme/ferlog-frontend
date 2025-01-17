import axios from 'axios';

// const API_URL = 'http://localhost:3333';
const API_URL = 'https://ferlog-backend.onrender.com';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
