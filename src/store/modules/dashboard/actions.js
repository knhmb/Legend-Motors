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
};
