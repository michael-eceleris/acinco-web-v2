import axios from "axios";

const clientMsAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URl_MS,
});

export default clientMsAxios;
