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
  ADD_TO_CART(state, payload) {
    state.cart = payload;
  },
  STORE_CART_ITEMS(state, payload) {
    state.cartItems.push(payload);
  },
  RESET_CART_ITEMS(state) {
    state.cartItems = [];
  },
};
