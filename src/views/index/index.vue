<template>
  <div class="home">
      <router-link to='/game'>game</router-link>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
};
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../../assets/bj/snow1.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: -1;
}
</style>
