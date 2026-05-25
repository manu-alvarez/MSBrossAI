import axios from 'axios';

const API = '/_dohler/api';

let _token: string | null = localStorage.getItem('dohler_token');

export function setToken(t: string | null) {
  _token = t;
  if (t) localStorage.setItem('dohler_token', t);
  else localStorage.removeItem('dohler_token');
}

export function getToken() { return _token; }

const api = axios.create({ baseURL: API });

api.interceptors.request.use(config => {
  if (_token) config.headers.Authorization = `Bearer ${_token}`;
  return config;
});

api.interceptors.response.use(
  r => r,
  err => {
    if (err.response?.status === 401) {
      setToken(null);
      window.location.reload();
    }
    return Promise.reject(err);
  }
);

export default api;
