<template>
  <v-container>
    <v-row>
      <!-- адаптив https://vuetifyjs.com/en/components/grids/#usage -->
      <v-col
        class="card list-group-item"
        v-for="(item, index) in collectionItemsFromMixin"
        :key="index"
        cols="12"
        :xl="2"
        :lg="3"
        :md="4"
        :sm="6"
        :xs="12"
      >
        <!-- получаем из стора обьект конкретной страны -->
        <TemplateMiniItemWine :objectCountry="objectCountry" :item="item" />
      </v-col>
    </v-row>
    <!-- BTNS -->
    <div class="btn-toolbar">
      <div class="btn-group">
        <v-btn
          style="border-radius: 5px"
          class="mr-2"
          :class="{ AC: isActive }"
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
  </v-container>

  <!-- Старый вариант -->
  <!-- <div class="container"> -->
  <!--     
    <ul class="list-group">
      <li v-for="item in collection" class="list-group-item">
        {{ item.name }} + {{ item.age }}
        <TemplateMiniItemWine
          :objectCountry="$store.state.arrayItems[0]"
          :item="item"
        />
      </li>
    </ul> -->
  <!-- <hr />
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
          @click.prevent="setPage(p)"
        >
          {{ p }}
        </v-btn>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
// import lodashFunction_range from "lodash/range";
// import lodashFunction_slice from "lodash/slice";
import TemplateMiniItemWine from "@/components/template-card-wine/TemplateItemWineMini.vue";

// удалить потом из этой папки тест файл
import test from "@/plugins/test.js";
// НУЖНО ПЕРЕНОСИТЬ В СТОР И ПРОДУМАТЬ ГДЕ ОТОБРАЖАТЬ И КАК ОТОБРАЖАТЬ ПАГИНАЦИЮ И КАК БЫТЬ ПО СТРАНАМ В ОТДЕЛЬНОСТИ
export default {
  mixins: [test],
  components: {
    TemplateMiniItemWine,
  },
  data() {
    return {
      isActive: false,
      // perPage- кол-во товаров на странице
      // perPage: 2,
      // кол-во кнопок пагинации
      // pagination: {},
    };
  },

  computed: {
    ...mapState({
      objectCountry: (state) => state.arrayItems[0],
    }),

    // collection() {
    //   // получаем из конкретной страны массив с товарами
    //   return this.paginate(this.objectCountry.items);
    // },
  },
  methods: {
    // setPage(p, index) {
    //   this.pagination = this.paginator(this.objectCountry.items.length, p);
    // },
    // let a = document.querySelectorAll(".bq");
    // console.log(a);
    // a.find((item) => {
    //   if (item === index) {
    //     item.classList.add("AC");
    //   }
    // });
    //
    // paginate(data) {
    //   return lodashFunction_slice(
    //     data,
    //     this.pagination.startIndex,
    //     this.pagination.endIndex + 1
    //   );
    // },
    // paginator(totalItems, currentPage) {
    //   const startIndex = (currentPage - 1) * this.perPage,
    //     endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
    //   return {
    //     currentPage: currentPage,
    //     startIndex: startIndex,
    //     endIndex: endIndex,
    //     pages: lodashFunction_range(
    //       1,
    //       Math.ceil(totalItems / this.perPage) + 1
    //     ),
    //   };
    // },
  },
  // created() {
  //   // this.setPage(1);
  // },
};
</script>

<style>
.AC {
  color: red !important;
  background: red !important;
}
</style>