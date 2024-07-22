import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3002/api",
  headers: { 'Content-Type' : 'application/json'}
})