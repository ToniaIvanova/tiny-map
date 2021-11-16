import axios from 'axios';
import { BASE_URL } from './constants/baseURL';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;