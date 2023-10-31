<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 1.5rem 4rem;
}

@media only screen and (max-width: 1199px) {
  .container {
    padding: 1.5rem 2rem;
  }
}
</style>