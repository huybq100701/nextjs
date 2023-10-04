import Axios from '../Axios';

export const getOrders = async (payload) => {
  try {
    const res = await Axios.post(
      payload.start_date
        ? `orders?start_date=${payload.start_date}&end_date=${payload.end_date}`
        : `orders`,
      payload
    );
    return res.data;
  } catch (error) {
    throw error; 
  }
};
