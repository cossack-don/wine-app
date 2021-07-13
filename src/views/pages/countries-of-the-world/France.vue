<template>
  <div>
    <div class="text-center"></div>
    <v-container>
      <v-row>
        <!-- адаптив https://vuetifyjs.com/en/components/grids/#usage -->
        <v-col
          class="card"
          v-for="(item, index) in collectionItemsFromMixin"
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
      <!-- Пагинация НУЖНО ДОДЕЛАТЬ ЧТО НИЖЕ _КОМПОНЕНТ ПАГИНАЦИИ -->
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
            {{ p }}
          </v-btn>
        </div>
      </div>
      <!-- НЕ УСПЕЛ ДОДЕЛАТЬ КОМПОНЕНТ - НУЖНО ПЕРЕДАТЬ КЛИК В ДОЧЕРНИЙ КОМПОНЕНТ(В ПАГИНАЦИЮ) -->
      <!-- <testBtns :pagination="pagination" @click="test" /> -->
    </v-container>
  </div>
</template>

<script>
import TemplateMiniItemWine from "@/components/template-card-wine/TemplateItemWineMini.vue";
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";

// ТЕСТОВЫЕ 2 импорта использую для пагинации
import testMix from "@/mixins/pagination/mixinPagination.js";
import testBtns from "@/mixins/pagination/PaginationBtns.vue";

export default {
  mixins: [testMix],
  computed: {
    ...mapState({
      objectCountry: (state) => state.arrayItems[0],
    }),
  },
  components: { TemplateMiniItemWine, testBtns },
  methods: {},
};
</script>

<style>
</style>