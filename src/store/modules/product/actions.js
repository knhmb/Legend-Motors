import axios from "axios";

export default {
  async getProducts(context) {
    const response = await axios.get("api/v1/car/brand");
    context.commit("SET_PRODUCTS", response.data.items);
  },
};
