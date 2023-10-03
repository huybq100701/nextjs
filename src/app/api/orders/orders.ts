
export default async function apiGetOrders() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch orders');
      }
  
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  