import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || import.meta.env.VITE_LOCAL_API_URL,
  headers: { 'Content-Type': 'application/json' },
});
