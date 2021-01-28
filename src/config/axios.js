import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://18.212.178.238:8000/api/v1",
});

export default clienteAxios;
