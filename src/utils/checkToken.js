import store from "@/store/store";
import { ElNotification } from "element-plus";

export let valid = null;

const checkRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  await store
    .dispatch("auth/checkRefreshToken", refreshToken)
    .then(() => {
      valid = true;
    })
    .catch(() => {
      valid = false;
      ElNotification({
        title: "Error",
        message: "Session Expired. Please Login Again!",
        type: "error",
      });
      store.commit("auth/LOGOUT");
    });
  console.log("executed");
};

export const checkAccessToken = async () => {
  const accessToken = localStorage.getItem("accessToken");

  await store
    .dispatch("auth/validateUser", accessToken)
    .then(() => {
      valid = true;
    })
    .catch(() => {
      checkRefreshToken();
    });
};

// export default checkAccessToken;
