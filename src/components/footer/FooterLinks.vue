<template>
  <router-link :to="`${link.url}`">
    <v-btn color="indigo" class="my-2 mr-2" dark>
      {{ link.name }}
    </v-btn>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>