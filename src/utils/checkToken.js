import store from "@/store/store";
import { ElNotification } from "element-plus";

export let valid = null;

const checkRefreshToken = async (isShowMessage) => {
  const refreshToken = localStorage.getItem("refreshToken");

  await store
    .dispatch("auth/checkRefreshToken", refreshToken)
    .then(() => {
      valid = true;
    })
    .catch(() => {
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
    });
  console.log("executed");
};

export const checkAccessToken = async (isShowMessage) => {
  const accessToken = localStorage.getItem("accessToken");

  await store
    .dispatch("auth/validateUser", accessToken)
    .then(() => {
      valid = true;
    })
    .catch(() => {
      checkRefreshToken(isShowMessage);
    });
};

export const clearCart = () => {
  store.commit("product/RESET_CART_ITEMS");
};

// export default checkAccessToken;
