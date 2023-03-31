import axios from "axios";


const BASE_URL = "http://invoice-maker-api-one.vercel.app/api";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});