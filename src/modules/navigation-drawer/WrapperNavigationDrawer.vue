<template>
  <!-- ТУТ ПАДАЕТ ОШИБКА СМ КОНСОЛЬ ИЗ ЗА В МОДЕЛ -->
  <!-- Computed property "flagBtnLeftSidebar" was assigned to but it has no setter. -->

  <v-navigation-drawer v-model="flagBtnLeftSidebar" fixed temporary>
    <v-list dense>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
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
  data() {
    return {
      selectedItem: 0,
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
    };
  },
};
</script>

<style>
</style>