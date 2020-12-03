import clientAxios from "./axios";

const tokenAuth = ( data ) => {
  const { token } = data;
  if (token) {
    clientAxios.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    delete clientAxios.defaults.headers.common['Authorization'];
  }
};
export default tokenAuth;