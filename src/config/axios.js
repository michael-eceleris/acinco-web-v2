import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'http://18.212.98.162:8000/api/v1',
})

export default clienteAxios;
