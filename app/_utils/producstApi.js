import axiosClient from "./axiosClient";
const getLatestProducts = async () => await axiosClient.get("/products/?populate=*");
const getProductById = async (id) => await axiosClient.get(`/products?populate=*&filters[id][$eq]=${id}`);
const getProductsByType = async (type) => await axiosClient.get(`/products?populate=*&filters[type][$eq]=${type}`);

export { getLatestProducts, getProductById, getProductsByType };

/* 
عمر في المحل الهاشمي حق الجوالات الشارع العام عند حق المختبرات  حق الديس عند المركزي
*/