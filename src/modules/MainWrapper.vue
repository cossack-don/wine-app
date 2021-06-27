<template>
  <v-app id="inspire">
    <!-- header -->
    <WrapperAppBar />
    <!-- left bar -->
    <WrapperNavigationDrawer />
    <!-- main - content -pages -->
    <WrapperForMainPages />
  </v-app>
</template>

<script>
import WrapperAppBar from "@/modules/app-bar/WrapperAppBar";
import WrapperNavigationDrawer from "@/modules/navigation-drawer/WrapperNavigationDrawer";
import WrapperForMainPages from "@/modules/main-content/WrapperForMainPages";

export default {
  components: {
    WrapperAppBar,
    WrapperNavigationDrawer,
    WrapperForMainPages,
  },
};
</script>
