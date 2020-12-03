import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'http://34.230.36.247:8000/api/v1',
})

export default clienteAxios;
