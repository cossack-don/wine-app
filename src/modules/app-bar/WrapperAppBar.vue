<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="chengeFlag"></v-app-bar-nav-icon>

    <FavoritesCounterIcon />
    <SearchInput />
    <ResultSearchLink />
    <SwitchModeTheme />

    <v-toolbar-title class="ml-auto font-logo-name">
      <LogoLinkHome />
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
// components
import SearchInput from "@/components/app-bar/SearchInput.vue";
import ResultSearchLink from "@/components/app-bar/ResultSearchLink.vue";
import LogoLinkHome from "@/components/app-bar/LogoLinkHome.vue";
import FavoritesCounterIcon from "@/components/app-bar/FavoritesCounterIcon.vue";
import SwitchModeTheme from "@/components/app-bar/SwitchModeTheme.vue";

export default {
  components: {
    SearchInput,
    ResultSearchLink,
    LogoLinkHome,
    FavoritesCounterIcon,
    SwitchModeTheme,
  },

  methods: {
    ...mapActions(["ACTION_FLAG_BTN_LEFT_SIDEBAR"]),

    chengeFlag() {
      this.ACTION_FLAG_BTN_LEFT_SIDEBAR();
    },
  },
};
</script>

<style>
.font-logo-name {
  font-family: "Oswald", sans-serif !important;
}
</style>