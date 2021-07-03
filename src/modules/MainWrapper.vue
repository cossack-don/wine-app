<template>
  <v-app id="inspire">
    <!-- header -->

    <WrapperAppBar />

    <!-- left bar -->
    <WrapperNavigationDrawer />
    <!-- main - content -pages -->
    <WrapperForMainPages />
    <!-- footer -->
    <WrapperFooter />
  </v-app>
</template>

<script>
import WrapperAppBar from "@/modules/app-bar/WrapperAppBar";
import WrapperNavigationDrawer from "@/modules/navigation-drawer/WrapperNavigationDrawer";
import WrapperForMainPages from "@/modules/main-content/WrapperForMainPages";
import WrapperFooter from "@/modules/footer/WrapperFooter.vue";

export default {
  components: {
    WrapperAppBar,
    WrapperNavigationDrawer,
    WrapperForMainPages,
    WrapperFooter,
  },
};
</script>
<style>
/* выравнивает в header мод темной темы и поиска */
.v-toolbar .v-input {
  padding-top: 0;
  margin-top: 20px;
}
</style>
