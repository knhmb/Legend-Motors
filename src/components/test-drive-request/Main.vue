<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form-content">
    <base-container>
      <el-row :gutter="50">
        <el-col :span="12">
          <h5>Test Drive Request</h5>
          <p>
            Interested in trying a Wuling car? fill in the form below, choose
            the car you want, select the nearest dealer from your location, and
            arrange a test drive schedule for your dream Wuling car.
          </p>
          <el-form-item label="Select Wuling Car">
            <el-select
              placeholder="Interested Product"
              v-model="ruleForm.productName"
            >
              <el-option
                v-for="product in products"
                :key="product.id"
                :label="product.name"
                :value="product.slug"
                @click="setSelectedProduct(product.slug)"
              ></el-option>
            </el-select>
            <el-select placeholder="Interested Type" v-model="ruleForm.type">
              <template v-if="selectedProduct">
                <el-option
                  v-for="size in selectedProductSizes.carSize"
                  :key="size"
                  :label="size.name"
                  :value="size.name"
                ></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <h5>Fill in the details</h5>
          <el-form
            label-position="top"
            :model="ruleForm"
            :rules="rules"
            ref="ruleFormRef"
          >
            <el-form-item :label="$t('auth.title')" prop="title">
              <el-select
                :placeholder="$t('auth.title')"
                v-model="ruleForm.title"
              >
                <el-option label="Mr"></el-option>
                <el-option label="Ms"></el-option>
                <el-option label="Miss"></el-option>
                <el-option label="Mrs"></el-option>
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
            <el-form-item label="Email" prop="email">
              <base-input
                placeholder="Email"
                v-model="ruleForm.email"
              ></base-input>
            </el-form-item>
            <el-form-item label="Phone Number" prop="phone">
              <base-input
                placeholder="Phone Number"
                v-model="ruleForm.phone"
              ></base-input>
            </el-form-item>
            <el-form-item label="Schedule Date" prop="date">
              <el-date-picker
                class="date-input"
                type="date"
                placeholder="Please select the date"
                v-model="ruleForm.date"
              />
            </el-form-item>
            <el-form-item label="Schedule Time" prop="time">
              <el-time-picker
                class="date-input"
                placeholder="Please select the time"
                v-model="ruleForm.time"
              />
            </el-form-item>
            <el-form-item prop="checked">
              <el-checkbox
                label="I agree to the terms of data collection and storage."
                v-model="ruleForm.checked"
              ></el-checkbox>
            </el-form-item>
            <el-form-item>
              <base-button @click="requestDrive">Submit</base-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <p class="have-an-account">Already have an account?</p>
      <base-button :login="true" @click="$router.push('/login')"
        >Log in</base-button
      >
    </base-container>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
import * as tokenData from "@/utils/checkToken";

export default {
  data() {
    return {
      selectedProduct: "",
      selectedProductSizes: null,
      ruleForm: {
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        checked: "",
        productName: "",
        type: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: this.$t("auth.title-required"),
            trigger: "blur",
          },
        ],
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
        email: [
          {
            required: true,
            message: this.$t("auth.email-required"),
            trigger: "blur",
          },
          {
            type: "email",
            message: this.$t("auth.email-format"),
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: this.$t("auth.phone-required"),
            trigger: "blur",
          },
        ],
        date: [
          {
            required: true,
            message: this.$t("auth.date-required"),
            trigger: "blur",
          },
        ],
        time: [
          {
            required: true,
            message: this.$t("auth.time-required"),
            trigger: "blur",
          },
        ],
        checked: [
          {
            required: true,
            message: this.$t("auth.terms-required"),
            trigger: "change",
          },
        ],
      },
    };
  },
  watch: {
    selectedProduct() {
      console.log(this.selectedProduct);
      if (this.selectedProduct) {
        this.selectedProductSizes = this.products.find(
          (item) => item.slug === this.selectedProduct
        );
      }
    },
  },
  computed: {
    products() {
      return this.$store.getters["product/products"];
    },
    selectedProductCarSizes() {
      let data;
      if (this.selectedProduct) {
        data = this.products.find((item) => item.slug === this.selectedProduct);
      }
      return data;
    },
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
  methods: {
    setSelectedProduct(slug) {
      this.selectedProduct = slug;
    },
    requestDrive() {
      if (!this.ruleForm.productName || !this.ruleForm.type) {
        ElNotification({
          title: "Error",
          message: "Please select a product and a product type",
          type: "error",
        });
        return;
      }

      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            member: this.ruleForm.name,
            email: this.ruleForm.email,
            scheduleDate: this.ruleForm.date,
            scheduleTime: this.ruleForm.time,
            phone: this.ruleForm.phone,
            name: this.ruleForm.productName,
            type: this.ruleForm.type,
            status: "In-Progress",
          };
          this.$store.dispatch("product/testDriveRequest", data).then(() => {
            ElNotification({
              title: "Success",
              message: "Data has been sent",
              type: "success",
            });
            this.$refs.ruleFormRef.resetField();
            this.ruleForm.productName = "";
            this.ruleForm.type = "";
          });
        }
      });
    },
  },
  async created() {
    await tokenData.checkAccessToken(false);
    console.log(this.currentUser);
    if (tokenData.valid) {
      this.ruleForm.title = this.currentUser.title;
      this.ruleForm.firstName = this.currentUser.firstName;
      this.ruleForm.lastName = this.currentUser.lastName;
      this.ruleForm.email = this.currentUser.email;
      this.ruleForm.phone = this.currentUser.phone;
    }
  },
};
</script>

<style scoped>
.form-content .container {
  /* display: flex;
  justify-content: center; */
  padding-left: 18rem;
  padding-right: 18rem;
}

/* .el-row {
  width: 843px;
} */

h5 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  color: #262f36;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
  margin: 1rem 0;
}

.el-form-item {
  flex-direction: column;
}

:deep(.el-form-item__label) {
  justify-content: flex-start;
}

.el-select {
  width: 100%;
}

:deep(.el-input__wrapper) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
  padding: 0.2rem 1rem;
}

.form-content .el-select:first-of-type {
  margin-bottom: 0.5rem;
}

:deep(.date-input) {
  width: 100%;
}

:deep(.date-input .el-input__wrapper) {
  padding: 0.5rem 1rem;
}

:deep(.el-input__prefix) {
  order: 2;
}

:deep(.el-checkbox__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 20px;
  color: #262f36;
}

.other {
  display: flex;
  justify-content: center;
  width: 66px;
}

p.have-an-account {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 27px;
  color: #262f36;
  text-align: center;
}

.el-button.is-login {
  margin: 0 auto;
  display: flex;
}

.form-content .el-select {
  width: 100%;
}

.form-content :deep(.el-select .el-input__wrapper) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

.form-content
  :deep(
    .el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--date.date-input.el-tooltip__trigger.el-tooltip__trigger
  ),
.form-content
  :deep(
    .el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--time.date-input.el-tooltip__trigger.el-tooltip__trigger
  ) {
  height: inherit;
}
</style>