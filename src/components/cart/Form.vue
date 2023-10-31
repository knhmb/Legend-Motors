<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cart-form">
    <h3>{{ $t("form.fill-the-details") }}</h3>
    <el-form
      ref="ruleFormRef"
      :rules="rules"
      :model="ruleForm"
      label-position="top"
    >
      <el-form-item :label="$t('form.label-flat-floor-block')" prop="flat">
        <base-input
          v-model="ruleForm.flat"
          :placeholder="$t('form.placeholder-address')"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-building')" prop="building">
        <base-input
          v-model="ruleForm.building"
          :placeholder="$t('form.placeholder-address')"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-street')" prop="street">
        <base-input
          v-model="ruleForm.street"
          :placeholder="$t('form.placeholder-address')"
        ></base-input>
      </el-form-item>
      <el-form-item :label="$t('form.label-district')" prop="district">
        <el-select
          v-model="ruleForm.district"
          :placeholder="$t('form.placeholder-please-select')"
        >
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('form.label-region')" prop="region">
        <el-radio-group v-model="ruleForm.region">
          <el-radio label="Hong Kong">Hong Kong</el-radio>
          <el-radio label="Kowloon">Kowloon</el-radio>
          <el-radio label="Territories">New Territories</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="terms">
        <el-checkbox v-model="ruleForm.terms">
          {{ $t("form.terms") }}
        </el-checkbox>
      </el-form-item>
      <el-form-item>
        <base-button @click="submit">{{ $t("btn.continue") }}</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
import * as tokenData from "@/utils/checkToken";
import loading from "@/utils/loading";

export default {
  props: ["paymentMethod"],
  mixins: [loading],
  data() {
    return {
      ruleForm: {
        flat: "",
        building: "",
        street: "",
        district: "",
        region: "",
        terms: "",
        saveInfo: "",
      },
      rules: {
        flat: [
          {
            required: true,
            message: this.$t("form.message-address-required"),
            trigger: "blur",
          },
        ],
        building: [
          {
            required: true,
            message: this.$t("form.message-address-required"),
            trigger: "blur",
          },
        ],
        street: [
          {
            required: true,
            message: this.$t("form.message-address-required"),
            trigger: "blur",
          },
        ],
        district: [
          {
            required: true,
            message: this.$t("form.message-address-required"),
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: this.$t("form.message-address-required"),
            trigger: "change",
          },
        ],
        terms: [
          {
            required: true,
            message: this.$t("auth.terms-required"),
            trigger: "change",
          },
        ],
        saveInfo: [{}],
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
    cartItems() {
      return this.$store.getters["product/cartItems"];
    },
  },
  methods: {
    submit() {
      if (this.cartItems.length < 1) {
        ElNotification({
          title: "Error",
          message: this.$t("form.cart-items-required"),
          type: "error",
        });
        return;
      }

      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          if (!this.paymentMethod) {
            ElNotification({
              title: "Error",
              message: this.$t("form.payment-method-required"),
              type: "error",
            });
            return;
          }

          const data = {
            paymentType: this.paymentMethod,
            userId: this.currentUser.id,
            region: this.ruleForm.region,
            street: this.ruleForm.street,
            building: this.ruleForm.building,
            floor: this.ruleForm.flat,
            district: this.ruleForm.district,
            status: "Waiting Payment",
            productItems: this.cartItems,
          };

          this.openLoading();

          this.$store
            .dispatch("dashboard/order", data)
            .then(() => {
              tokenData.clearCart();
              this.closeLoading();
              if (this.paymentMethod === "Other Payment") {
                this.$router.replace("/waiting-payment");
              } else {
                this.$router.replace("/order-confirmed");
              }
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
    console.log(this.currentUser);
    await tokenData.checkAccessToken(false);
    // this.loadData = true;

    if (tokenData.valid) {
      this.ruleForm.region = this.currentUser.region;
      this.ruleForm.street = this.currentUser.street;
      this.ruleForm.building = this.currentUser.building;
      this.ruleForm.flat = this.currentUser.flatFloorBlock;
      this.ruleForm.district = this.currentUser.district;
    }
  },
};
</script>

<style scoped>
/* .cart-form {
  margin-top: 3rem;
} */

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 24px;
  line-height: 37px;
  color: #262f36;
  margin-bottom: 1rem;
  align-self: flex-start;
}

.el-input {
  width: 100%;
}

:deep(.el-form-item__label) {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
}

:deep(.el-textarea__inner) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
}

:deep(.el-checkbox__label) {
  max-width: 23rem;
  white-space: break-spaces;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 20px;
  color: #262f36;
}

:deep(.el-checkbox__label span) {
  text-decoration: underline;
}

.el-checkbox {
  margin-top: 1rem;
}

.el-button {
  margin-top: 1rem;
}

.el-select {
  width: 100%;
}

:deep(.el-select .el-input__wrapper) {
  background: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #878787;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

:deep(.el-radio .el-radio__label) {
  color: #1d2129;
}

:deep(.el-radio.is-checked .el-radio__inner),
:deep(.el-checkbox.is-checked .el-checkbox__inner) {
  background-color: #384967;
  border-color: #384967;
}

:deep(.el-radio.is-checked .el-radio__label),
:deep(.el-checkbox.is-checked .el-checkbox__label) {
  color: #384967;
}

@media only screen and (max-width: 1199px) {
  h3 {
    margin: 1rem 0 2rem 0;
  }
}
</style>