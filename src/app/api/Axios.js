import axios from 'axios';

const Axios = axios;

Axios.interceptors.request.use((config) => {
  const token = localStorage.token;
  config.headers.apiKey = token;
  return config;
});
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //document.getElementById('loading_id').style.display="none";
    if (error && error.response && error.response.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export default Axios;
