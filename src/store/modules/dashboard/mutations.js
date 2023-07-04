export default {
  SET_CMS(state, payload) {
    state.cms = payload;
  },
  SET_BANNERS(state, payload) {
    state.banners = payload;
  },
  SET_BLOB_IMAGE(state, payload) {
    state.blobImage = payload;
  },
  SET_PRODUCT_BLOB_IMAGE(state, payload) {
    state.productBlobImage = payload;
    console.log(state.productBlobImage);
  },
};
