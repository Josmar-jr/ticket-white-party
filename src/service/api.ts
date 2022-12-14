import axios from "axios";

const baseUrl = process.env.API_URL ?? "https://ticket-white-party.vercel.app";

export const api = axios.create({
  baseURL: `${baseUrl}/api`,
});
