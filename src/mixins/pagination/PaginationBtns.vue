<template>
  <div class="btn-toolbar">
    <div class="btn-group">
      <v-btn
        style="border-radius: 5px"
        class="mr-2"
        elevation="3"
        fab
        tile
        color="primary"
        small
        v-for="(p, index) in pagination.pages"
        :key="index"
        @click.prevent="setPage(p, index)"
      >
        <!-- @click.prevent="setPage(p, index)" -->
        {{ p }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
    },
  },
  methods: {},
};
</script>

<style>
</style>