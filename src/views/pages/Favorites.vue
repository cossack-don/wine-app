<template>
  <div>
    Favorites.vue

    <div
      v-for="(item, index) in GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
// import TemplateItemWineForFavorites from "@/views/TemplateItemWineForFavorites.vue";
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";

export default {
  components: {},
  computed: {
    ...mapState({
      // переменовать под objectCountry
      // arrayMain: (state) => state.arrayItems,
    }),
    ...mapGetters(["GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES"]),
  },
  methods: {},
  created() {},
};
</script>

<style>
</style>