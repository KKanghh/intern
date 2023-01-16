import axios from "axios";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "TT-OS": "IOS",
    "TT-Version": 999,
  },
});

export default request;
