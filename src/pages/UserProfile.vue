<template>
  <div class="user-profile">
    <h3>Profile</h3>
    <div class="icon-content">
      <img src="../assets/user.png" alt="" />
    </div>
    <p class="username">User Name</p>
    <p>user@mail.com</p>
    <p>9123 9123</p>
    <p class="address">
      Rm. 61, 8/F, Sino Industrial Plaza, 9 Kai Cheung Rd., Kowloon Bay, Kowloon
    </p>
  </div>
</template>

<style scoped>
.user-profile {
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

.icon-content {
  background: #384967;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  /* margin: 0 auto; */
}

img {
  width: 2rem;
}

p {
  font-family: "Avenir";
  font-style: normal;
  font-weight: 850;
  font-size: 16px;
  line-height: 25px;
  color: #262f36;
  margin-bottom: 1rem;
}

p.username {
  font-weight: 900;
  font-size: 28px;
  line-height: 44px;
  color: #384967;
  margin-top: 1rem;
}

p.address {
  width: 23rem;
  text-align: center;
}
</style>