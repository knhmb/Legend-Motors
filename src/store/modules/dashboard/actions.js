import axios from "axios";

export default {
  async getCMS(context) {
    const response = await axios.get("api/v1/cms/contents");
    context.commit("SET_CMS", response.data.items);
  },
  async getBanners(context) {
    const response = await axios.get("api/v1/banner");
    context.commit("SET_BANNERS", response.data.items);
  },
  async inquire(_, payload) {
    await axios.post("api/v1/inquiry", payload);
  },
  async fetchBlobImage(context, payload) {
    const response = await axios.get(`/api/v1/system/uploads/${payload}`, {
      responseType: "blob",
    });
    context.commit("SET_BLOB_IMAGE", URL.createObjectURL(response.data));
  },
  async fetchProductBlobImage(context, payload) {
    const response = await axios.get(`/api/v1/system/uploads/${payload}`, {
      responseType: "blob",
    });
    context.commit(
      "SET_PRODUCT_BLOB_IMAGE",
      URL.createObjectURL(response.data)
    );
  },
  async order(_, payload) {
    await axios.post("api/v1/histories/order", payload);
  },
};
