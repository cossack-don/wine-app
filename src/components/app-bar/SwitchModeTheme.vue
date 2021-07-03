<template>
  <div class="mode-chenge-theme d-flex justify-center align-center">
    <!-- https://vuetifyjs.com/en/features/theme/#customizing -->
    <!-- смена темы -->
    <v-switch v-model="$vuetify.theme.dark" inset></v-switch>
    <v-icon large color="blue "> mdi-theme-light-dark </v-icon>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mode-chenge-theme {
  margin-right: 15px;
  border: 1px solid #1976d2;
  height: 50px;
  padding: 15px;
  border-radius: 5px;
}
</style>