<template>
  <section class="booking-terms-and-conditions">
    <base-container>
      <h3>{{ cmsContent.title }}</h3>
      <p>{{ cmsContent.content }}</p>

      <!-- <p>
        1. I confirm that I am over 18 years old and have read and agreed to all
        the terms and conditions of this website and accept their constraints.
      </p>
      <p>
        2. The reservation fee paid by you to Lijun Automobile Co., Ltd. will be
        fully used as the reservation fee for booking the Air ev registered in
        Hong Kong (if applicable). If the company fails to provide the vehicle
        of your choice, the company will refund the full amount. The reservation
        fee amount will be included in Air ev's reservation fee (if applicable),
        and once the quota is confirmed and the order is signed, the reservation
        fee will not be refunded.
      </p>
      <p>
        3. The price of the vehicle will be subject to the final confirmation of
        the suggested retail price approved by Lijun Automobile Co., Ltd. from
        the customs.
      </p>
      <p>
        4. All the equipment of the new vehicle is subject to the factory's
        supply situation, and the delivery date is also subject to the factory's
        confirmation.
      </p>
      <p>
        5. Lijun Automobile Co., Ltd. reserves the right to change or terminate
        the promotion, reservation price, terms and conditions at any time
        without prior notice. In case of any dispute, Li Jun Automobile Co.,
        Ltd. reserves the right of final decision and final interpretation of
        this provision.
      </p>
      <p>
        6. For any unsuccessful reservations caused by website system problems
        and network data transmission problems or the use of incomplete,
        incorrect or inaccurate information, which prevents you from
        successfully completing the reservation process, Lijun Automobile Co.,
        Ltd. will not be held responsible. Responsible.
      </p> -->
    </base-container>
  </section>
</template>

<script>
export default {
  computed: {
    cms() {
      return this.$store.getters["dashboard/cms"];
    },
    cmsContent() {
      return this.cms.find(
        (item) => item.slug === "cms-booking-terms-condition"
      );
    },
  },
};
</script>
  
<style scoped>
.booking-terms-and-conditions {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
}

.booking-terms-and-conditions .container {
  width: 60rem;
}

h3 {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 38px;
  color: #384967;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 110%;
  color: #697187;
  margin-bottom: 1rem;
}
</style>