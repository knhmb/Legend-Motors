<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form-content" v-if="loadData">
    <base-container>
      <el-row :gutter="50">
        <el-col :md="24" :lg="12">
          <h5>{{ $t("menu.test-drive-request") }}</h5>
          <p>
            {{ $t("dashboard.test-drive-request-description") }}
          </p>
          <el-form-item :label="$t('form.label-select-car')">
            <el-select
              :placeholder="$t('form.placeholder-interested-product')"
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
            <el-select
              :placeholder="$t('form.placeholder-interested-product')"
              v-model="ruleForm.type"
            >
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
        <el-col :md="24" :lg="12">
          <h5>{{ $t("form.fill-the-details") }}</h5>
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
                <el-option label="Mr" value="Mr"></el-option>
                <el-option label="Ms" value="Ms"></el-option>
                <el-option label="Miss" value="Miss"></el-option>
                <el-option label="Mrs" value="Mrs"></el-option>
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
            <el-form-item :label="$t('auth.email')" prop="email">
              <base-input
                :placeholder="$t('auth.email')"
                v-model="ruleForm.email"
              ></base-input>
            </el-form-item>
            <el-form-item :label="$t('form.label-phone-number')" prop="phone">
              <base-input
                :placeholder="$t('form.label-phone-number')"
                v-model="ruleForm.phone"
              ></base-input>
            </el-form-item>
            <el-form-item :label="$t('form.label-schedule-date')" prop="date">
              <el-date-picker
                class="date-input"
                type="date"
                :placeholder="$t('form.placeholder-select-date')"
                v-model="ruleForm.date"
              />
            </el-form-item>
            <el-form-item :label="$t('form.label-schedule-time')" prop="time">
              <el-time-picker
                class="date-input"
                :placeholder="$t('form.placeholder-select-time')"
                v-model="ruleForm.time"
              />
            </el-form-item>
            <el-form-item prop="checked">
              <el-checkbox
                :label="$t('form.accept-data-collection')"
                v-model="ruleForm.checked"
              ></el-checkbox>
            </el-form-item>
            <el-form-item>
              <base-button @click="submit">{{ $t("btn.submit") }}</base-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <template v-if="!isLoggedIn">
        <el-divider></el-divider>
        <p class="have-an-account">{{ $t("form.already-have-an-account") }}</p>
        <base-button :login="true" @click="$router.push('/login')">{{
          $t("btn.login")
        }}</base-button>
      </template>
    </base-container>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
import * as tokenData from "@/utils/checkToken";
import loading from "@/utils/loading";

export default {
  mixins: [loading],
  data() {
    return {
      isLoggedIn: tokenData.valid,
      loadData: false,
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

    checkFields() {
      if (!this.ruleForm.productName || !this.ruleForm.type) {
        ElNotification({
          title: "Error",
          message: this.$t("form.product-required"),
          type: "error",
        });
        return;
      }
    },
    submit() {
      this.checkFields();

      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const selectedDate = new Date(this.ruleForm.date)
            .toISOString()
            .slice(0, 10);
          const d = new Date(this.ruleForm.time);
          const selectedTime = d.toLocaleTimeString("en-US", { hour12: false });

          const data = {
            title: this.ruleForm.title,
            email: this.ruleForm.email,
            scheduleDate: selectedDate,
            scheduleTime: selectedTime,
            phone: this.ruleForm.phone,
            firstName: this.ruleForm.firstName,
            lastName: this.ruleForm.lastName,
            carCarsizeSlug: this.ruleForm.type,
            carBrandSlug: this.ruleForm.productName,
            status: "Received",
          };

          this.openLoading();

          this.$store
            .dispatch("product/testDriveRequest", data)
            .then(() => {
              this.closeLoading();
              this.$router.replace("/test-drive-received");
              this.$refs.ruleFormRef.resetFields();
              this.ruleForm.productName = "";
              this.ruleForm.type = "";
            })
            .catch((err) => {
              this.closeLoading();
              ElNotification({
                title: "Error",
                message: err.response.data.message,
                type: "error",
              });
            });
        }
      });
    },
  },
  async created() {
    // this.openLoading();
    await tokenData.checkAccessToken(false);
    this.loadData = true;
    // this.closeLoading();

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

@media only screen and (max-width: 1199px) {
  .form-content .container {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
</style>