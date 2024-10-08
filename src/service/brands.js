import https from "./config";
const brands = {
    create: (data) => https.post("/brand/create", data),
    get: (params) => https.get(`/brand/search/`,{params}),
    update: (id, data) => https.patch(`/brand/update/${id}`, data),
    delete: (id) => https.delete(`/brand/delete/${id}`),
    getBrands: (id) => https.get(`/brand/category/${id}`)
};

export default brands;