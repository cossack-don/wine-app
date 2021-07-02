<template>
  <v-text-field
    class="ml-5 mr-5"
    type="text"
    placeholder="Название вина"
    v-model="mainSearchValue"
  ></v-text-field>
</template>

<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";

export default {
  computed: {
    mainSearchValue: {
      get() {
        return this.$store.state.mainSearchValue;
      },
      set(value) {
        this.ACTION_MUTATION_SEARCH_WINE(value);
        // this.$store.commit("MUTATION_SEARCH_WINE", value);
      },
    },
  },
  methods: {
    ...mapActions(["ACTION_MUTATION_SEARCH_WINE"]),
  },
};
</script>

<style>
</style>