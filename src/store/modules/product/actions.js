import axios from "axios";

export default {
  async getProducts(context) {
    const response = await axios.get("api/v1/car/brand");
    context.commit("SET_PRODUCTS", response.data.items);
  },
  async testDriveRequest(_, payload) {
    const response = await axios.post("api/v1/histories/testdrive", payload);
    console.log(response);
    // context.commit("SET_TEST_DRIVE_REQUEST", response.data.items);
  },
  async getProductDetail(context, payload) {
    const response = await axios.get(`api/v1/car/brand/${payload}`);
    context.commit("SET_PPRODUCT_DETAIL", response.data.item);
  },
};
