<template>
  <section class="after-sales">
    <base-container>
      <el-row justify="center">
        <el-col>
          <div class="card" v-for="item in 3" :key="item">
            <h2>Office Name</h2>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/location.png" alt="" />
              </div>
              <p>
                Rm. 61, 8/F, Sino Industrial Plaza, 9 Kai Cheung Rd., Kowloon
                Bay, Kowloon
              </p>
            </div>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/icons/clock.png" alt="" />
              </div>
              <p>
                Monday to Friday: 9 a.m. to 7 p.m. <br />
                Saturday, Sunday and public holidays: 9 am to 8 pm
              </p>
            </div>
            <div class="info">
              <div class="img-wrapper">
                <img src="../assets/call.png" alt="" />
              </div>
              <p>+852 6089 9653</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.after-sales {
  display: flex;
  justify-content: center;
}

.el-row {
  width: 55rem;
}

.card {
  padding: 2rem;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.card .info {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
}

.card .info .img-wrapper {
  background: #384967;
  border-radius: 100%;
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.card .info img {
  width: 80%;
}
</style>