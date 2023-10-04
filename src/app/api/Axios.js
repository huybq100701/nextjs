import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://the-sentry.trackify.life/api/sentry', 
  headers: {
    'Content-Type': 'application/json',
    'apiKey': '93107f68-b0e9-4510-9871-ddff40204367',
  },
});

export default Axios;
