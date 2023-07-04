export default {
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },
  SET_TEST_DRIVE_REQUEST(state, payload) {
    state.testDriveRequest = payload;
  },
  SET_PPRODUCT_DETAIL(state, payload) {
    state.productDetail = payload;
  },
  SET_SELECTED_PRODUCT_DETAILS(state, payload) {
    state.selectedProductDetails = payload;
  },
};
