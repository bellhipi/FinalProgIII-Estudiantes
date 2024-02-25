import axios from 'axios'

const apiBaseUrl = 'http://localhost:5000'
const apiTimeout = 0

const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: apiTimeout,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;
