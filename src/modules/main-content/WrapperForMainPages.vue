<template>
  <div>
    <v-main>
      <NavigationLinks />
      <hr />
      <router-view />
    </v-main>
  </div>
</template>

<script>
import NavigationLinks from "./NavigationLinks.vue";
export default {
  components: {
    NavigationLinks,
  },
};
</script>
<style>
</style>
