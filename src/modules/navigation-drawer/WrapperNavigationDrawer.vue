<template>
  <v-navigation-drawer
    v-model="$store.state.flagBtnLeftSidebar"
    fixed
    temporary
  >
    <!--  -->22
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      q: (state) => state.arrayItems[0],
    }),
  },
  created() {},
};
</script>

<style>
</style>