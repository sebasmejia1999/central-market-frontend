<template>
  <header class="sidebar">
    <nav>
      <ul>
        <li :key="index" v-for="(item, index) in itemsNav"></li>
      </ul>
    </nav>
    <!-- <TabMenu :model="items"/> -->
  </header>
</template>

<script>
/* import TabMenu from 'primevue/tabmenu'; */

export default {
  name: 'Sidebar',
  components: {
    /* TabMenu, */
  },
  data() {
    return {
      itemsNav: [''],
    };
  },
};
</script>

<style lang="scss" scoped>

/* .sidebar {
  display: grid;
  grid-template-rows: (1, 1fr);
  width: 100%;
  &__items {
    display: flex;
    justify-content: center;
    color: white;
    gap: 20px;
  }
} */
</style>
