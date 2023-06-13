<template>
  <div class="edit-profile">
    <h3>Edit Profile</h3>
    <el-form label-position="top">
      <el-form-item label="Upload Photo">
        <el-upload v-model:file-list="fileList" action="#">
          <el-button type="primary">Click to upload</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
};
</script>

<style scoped>
.edit-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
}
</style>