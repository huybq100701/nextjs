import Axios from '../Axios';

export const getOrders = async (payload) => {
  try {
    const response = await Axios.post(
      payload.start_date ? `orders?start_date=${payload.start_date}&end_date=${payload.end_date}` : `orders`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
