<template>
  <div class="User">
    <h1>User</h1>
    <i class="ion ion-person-circle-outline"></i>
    <input type="text" name="user" v-model="auth.name" />
    <i class="ion ion-lock-open"></i>
    <input type="text" name="password" v-model="auth.password" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('user');

export default {
  name: 'User',
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    this.users = await this.getUsers();
    console.log(this.users);
  },
  computed: mapGetters(['auth']),
  methods: mapActions(['getUsers']),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
