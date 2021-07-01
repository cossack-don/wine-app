<template>
  <!-- ТУТ ПАДАЕТ ОШИБКА СМ КОНСОЛЬ ИЗ ЗА В МОДЕЛ -->
  <!-- Computed property "flagBtnLeftSidebar" was assigned to but it has no setter. -->

  <v-navigation-drawer v-model="flagBtnLeftSidebar" fixed temporary>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      flagBtnLeftSidebar: (state) => state.flagBtnLeftSidebar,
    }),
  },
};
</script>

<style>
</style>