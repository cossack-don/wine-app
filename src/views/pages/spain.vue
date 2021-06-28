<template>
  <div>
    <v-container>
      <NavigationLinksPages />
      <v-row>
        <!-- адаптив https://vuetifyjs.com/en/components/grids/#usage -->
        <v-col
          class="card"
          v-for="(item, index) in objectCountry.items"
          :key="index"
          cols="12"
          :xl="2"
          :lg="3"
          :md="4"
          :sm="6"
          :xs="12"
        >
          <TemplateMiniItemWine :objectCountry="objectCountry" :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavigationLinksPages from "@/components/NavigationLinksPages.vue";
import TemplateMiniItemWine from "@/components/template-card-wine/TemplateItemWineMini.vue";
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      objectCountry: (state) => state.arrayItems[1],
    }),
  },
  components: { NavigationLinksPages, TemplateMiniItemWine },

  data() {
    return {};
  },
};
</script>

<style>
</style>