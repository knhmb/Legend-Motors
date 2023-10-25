import axios from "axios";

export default {
  async getProducts(context) {
    const response = await axios.get("api/v1/car/brand");
    context.commit("SET_PRODUCTS", response.data.items);
  },
  async testDriveRequest(_, payload) {
    await axios.post("/api/v1/histories/testdrive", payload);
  },
  async getProductDetail(context, payload) {
    const response = await axios.get(`api/v1/car/brand/${payload}`);
    context.commit("SET_PPRODUCT_DETAIL", response.data.item);
  },
};
