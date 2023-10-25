import store from "@/store/store";
import { ElNotification } from "element-plus";
import loading from "./loading";

export let valid = null;

const checkRefreshToken = async (isShowMessage) => {
  const refreshToken = localStorage.getItem("refreshToken");

  await store
    .dispatch("auth/checkRefreshToken", refreshToken)
    .then(() => {
      loading.methods.closeLoading();

      valid = true;
      return valid;
    })
    .catch(() => {
      loading.methods.closeLoading();

      valid = false;
      if (isShowMessage) {
        ElNotification({
          title: "Error",
          message: "Session Expired. Please Login Again!",
          type: "error",
        });
      }

      store.commit("auth/LOGOUT");
      clearCart();
      return valid;
    });
};

export const checkAccessToken = async (isShowMessage) => {
  const accessToken = localStorage.getItem("accessToken");
  loading.methods.openLoading();

  await store
    .dispatch("auth/validateUser", accessToken)
    .then(() => {
      loading.methods.closeLoading();
      valid = true;
      return valid;
    })
    .catch(() => {
      checkRefreshToken(isShowMessage);
    });
};

export const clearCart = () => {
  store.commit("product/RESET_CART_ITEMS");
};

export const setIsLoggedIn = (data) => {
  valid = data;
};

// export default checkAccessToken;
