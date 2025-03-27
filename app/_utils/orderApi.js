import axiosClient from "./axiosClient";
export const createOrder = async (data)  => await  axiosClient.post("/orders" , data)