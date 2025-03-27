import axiosClient from "./axiosClient";

const addToCart = (payload) => axiosClient.post("/carts", payload);

const getUserCartItems = (email) =>
  axiosClient.get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`);

const deleteUserCartItem = async (id) => await axiosClient.delete(`/carts/${id}`);
const getUserCartItemsID = async (id) => await axiosClient.get(`/carts`)
export default addToCart;
export { getUserCartItems, deleteUserCartItem , getUserCartItemsID };
