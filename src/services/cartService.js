import axios from "axios";

const API_URL = "http://localhost:4300/users/cart";

export const getCart = async (token) => {
  const res = await axios.get(`${API_URL}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const addToCart = async (productId, quantity = 1, token) => {
  // POST to /cart with { id, quantity }
  const res = await axios.post(
    `${API_URL}`,
    { id: productId, quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );
  return res.data;
};

export const removeFromCart = async (productId, token) => {
  // DELETE to /cart/:id
  const res = await axios.delete(`${API_URL}/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
