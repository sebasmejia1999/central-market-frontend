<template>
  <div class="home">
    <Sidebar/>
  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue';

export default {

  name: 'Home',
  components: {
    Sidebar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home{
  min-height: 750px;
  /* background-image: url("../../assets/images/fondo.jpg"); */
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px get-opacity(black, 60%);
}
</style>
