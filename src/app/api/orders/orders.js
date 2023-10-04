import Axios from '../Axios';

const getOrders = async (payload) => {
  try {
    const response = await Axios.post(
      'orders',
      payload,
      {
        headers: {
          'accept': 'application/json',
          'apiKey': '93107f68-b0e9-4510-9871-ddff40204367',
          'Content-Type': 'application/json',
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getOrders };
