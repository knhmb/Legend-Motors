<template>
  <div class="edit-profile">
    <h3>{{ $t("auth.edit-profile") }}</h3>
    <el-form
      label-position="top"
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormRef"
    >
      <el-form-item :label="$t('form.label-upload-photo')">
        <img
          class="user-img"
          crossorigin="anonymous"
          v-if="thumbnail"
          :src="`${url}api/v1/system/uploads/${thumbnail}`"
          alt=""
        />
        <div v-else class="avatar">
          <img src="../assets/user.png" alt="" />
        </div>
        <el-upload
          :on-success="successHandler"
          v-model:file-list="fileList"
          :action="`${url}api/v1/system/uploads`"
        >
          <el-button type="primary">{{ $t("btn.choose-file") }}</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item :label="$t('auth.title')" prop="title">
        <el-select :placeholder="$t('auth.name')" v-model="ruleForm.title">
          <el-option value="Mr" label="Mr"></el-option>
          <el-option value="Ms" label="Ms"></el-option>
          <el-option value="Miss" label="Miss"></el-option>
          <el-option value="Mrs" label="Mrs"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('auth.first-name')" prop="firstName">
        <base-input
          :placeholder="$t('auth.first-name')"
          v-model="ruleForm.firstName"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('auth.last-name')" prop="lastName">
        <base-input
          :placeholder="$t('auth.last-name')"
          v-model="ruleForm.lastName"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-phone-number')" prop="phoneNumber">
        <base-input
          :placeholder="$t('form.label-phone-number')"
          v-model.number="ruleForm.phoneNumber"
          @keypress="isNumber($event)"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-flat-floor-block')" prop="flat">
        <base-input
          :placeholder="$t('form.placeholder-address')"
          v-model="ruleForm.flat"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-building')" prop="building">
        <base-input
          :placeholder="$t('form.placeholder-address')"
          v-model="ruleForm.building"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-street')" prop="street">
        <base-input
          :placeholder="$t('form.placeholder-address')"
          v-model="ruleForm.street"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-district')" prop="district">
        <el-select
          :placeholder="$t('form.label-district')"
          v-model="ruleForm.district"
        ></el-select>
      </el-form-item>
      <el-form-item :label="$t('form.label-region')">
        <el-radio-group v-model="ruleForm.region" prop="region">
          <el-radio label="Hong Kong" />
          <el-radio label="Kowloon" />
          <el-radio label="New Territories" />
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <base-button @click="update">{{ $t("btn.save") }}</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElNotification, ElMessage } from "element-plus";
import { url } from "@/url";

export default {
  data() {
    return {
      url,
      fileList: [],
      thumbnail: "",
      ruleForm: {
        title: "",
        region: "",
        firstName: "",
        lastName: "",
        district: "",
        phoneNumber: "",
        street: "",
        building: "",
        flat: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: this.$t("auth.title-required"),
            trigger: "blur",
          },
        ],
        region: [{ required: false, trigger: "change" }],
        firstName: [
          {
            required: true,
            message: this.$t("auth.first-name-required"),
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: this.$t("auth.last-name-required"),
            trigger: "blur",
          },
        ],
        phoneNumber: [
          { required: false, trigger: "blur" },
          { type: "number", message: this.$t("auth.phone-invalid") },
        ],
        district: [{ required: false, trigger: "blur" }],
        building: [{ required: false, trigger: "blur" }],
        flat: [{ required: false, trigger: "blur" }],
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
  methods: {
    isNumber(evt) {
      const keysAllowed = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
      ];
      const keyPressed = evt.key;

      if (!keysAllowed.includes(keyPressed)) {
        evt.preventDefault();
        ElMessage({
          message: this.$t("form.numbers-validation"),
          type: "error",
        });
      }
    },
    successHandler(uploadFile) {
      console.log(uploadFile);
      this.thumbnail = uploadFile.item.name;
    },
    update() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            region: this.ruleForm.region,
            building: this.ruleForm.building,
            // username: this.ruleForm.name,
            phone: this.ruleForm.phoneNumber.toString(),
            district: this.ruleForm.district,
            street: this.ruleForm.street,
            flatFloorBlock: this.ruleForm.flat,
            title: this.ruleForm.title,
            firstName: this.ruleForm.firstName,
            lastName: this.ruleForm.lastName,
            thumbnail: this.thumbnail,
          };
          this.$store
            .dispatch("auth/updateUser", {
              data,
              id: this.currentUser.id,
            })
            .then(() => {
              ElNotification({
                title: "Success",
                message: this.$t("form.information-updated"),
                type: "success",
              });
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: err.response.data.message,
                type: "error",
              });
            });
        }
      });
    },
    // sendOtp() {
    //   this.$refs.ruleFormRef.validateField("email", (valid) => {
    //     if (valid) {
    //       this.$store.dispatch("auth/getOTP", { email: this.ruleForm.email });
    //     }
    //   });
    // },
  },
  created() {
    this.ruleForm.title = this.currentUser.title;
    this.ruleForm.firstName = this.currentUser.firstName;
    this.ruleForm.lastName = this.currentUser.lastName;
    this.ruleForm.phoneNumber = +this.currentUser.phone;
    this.ruleForm.flat = this.currentUser.flatFloorBlock;
    this.ruleForm.building = this.currentUser.building;
    this.ruleForm.street = this.currentUser.street;
    this.ruleForm.district = this.currentUser.district;
    this.ruleForm.region = this.currentUser.region;
    this.thumbnail = this.currentUser.thumbnail;
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

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  text-align: center;
  color: #262f36;
  margin-bottom: 2rem;
}

.avatar {
  background: #384967;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-right: 0.7rem;
}

.avatar img {
  width: 1.1rem;
}

:deep(.el-form-item__content) {
  align-items: center;
}

:deep(.el-upload-list) {
  margin: 0;
}

.el-button.el-button--primary {
  background: transparent;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 16px;
  line-height: 25px;
  color: #7d858c;
  border-color: #7d858c;
}

:deep(.el-form-item__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
}

.el-input,
.el-select {
  width: 24rem;
}

.el-button {
  display: flex;
  margin: 0 auto;
}

:deep(.el-radio.is-checked .el-radio__inner) {
  background: #384967;
  border-color: #384967;
}

:deep(.el-radio__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #1d2129;
}

:deep(.el-radio.is-checked .el-radio__label) {
  color: #1d2129;
}

.el-select :deep(.el-input__wrapper) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

img.user-img {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 0.7rem;
}
</style>