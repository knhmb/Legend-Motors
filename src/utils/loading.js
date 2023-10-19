import { ElLoading } from "element-plus";

export default {
  data() {
    return {
      fullscreenLoading: false,
      loading: null,
    };
  },
  methods: {
    openLoading() {
      this.loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      //   setTimeout(() => {
      //     loading.close();
      //   }, 2000);
    },
    closeLoading() {
      this.loading.close();
    },
  },
};
