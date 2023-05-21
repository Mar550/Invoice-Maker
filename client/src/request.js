import axios from "axios";


const BASE_URL = "https://invoice-maker-api-one.vercel.app/api";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});