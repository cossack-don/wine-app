<template>
  <v-container>
    <v-row>
      <!-- адаптив https://vuetifyjs.com/en/components/grids/#usage -->
      <v-col
        class="card list-group-item"
        v-for="(item, index) in collection"
        :key="index"
        cols="12"
        :xl="2"
        :lg="3"
        :md="4"
        :sm="6"
        :xs="12"
      >
        <TemplateMiniItemWine
          :objectCountry="$store.state.arrayItems[0]"
          :item="item"
        />
      </v-col>
    </v-row>
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
    </div>
  </v-container>
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
import lodashFunction_range from "lodash/range";
import lodashFunction_slice from "lodash/slice";
import TemplateMiniItemWine from "@/components/template-card-wine/TemplateItemWineMini.vue";
// НУЖНО ПЕРЕНОСИТЬ В СТОР И ПРОДУМАТЬ ГДЕ ОТОБРАЖАТЬ И КАК ОТОБРАЖАТЬ ПАГИНАЦИЮ И КАК БЫТЬ ПО СТРАНАМ В ОТДЕЛЬНОСТИ
export default {
  components: {
    TemplateMiniItemWine,
  },
  data() {
    return {
      data: [
        {
          name: "goga",
          age: 25,
        },
        {
          name: "goga",
          age: 25,
        },
        {
          name: "goga",
          age: 25,
        },
        {
          name: "goga2",
          age: 252,
        },
        {
          name: "goga23",
          age: 253,
        },
        {
          name: "goga",
          age: 25,
        },
        {
          name: "goga2",
          age: 252,
        },
        {
          name: "goga23",
          age: 253,
        },
      ],
      perPage: 4,
      pagination: {},
    };
  },

  computed: {
    collection() {
      return this.paginate(this.$store.state.arrayItems[0].items);
    },
  },
  methods: {
    setPage(p) {
      this.pagination = this.paginator(this.data.length, p);
    },

    paginate(data) {
      return lodashFunction_slice(
        data,
        this.pagination.startIndex,
        this.pagination.endIndex + 1
      );
    },

    paginator(totalItems, currentPage) {
      var startIndex = (currentPage - 1) * this.perPage,
        endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
      return {
        currentPage: currentPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: lodashFunction_range(
          1,
          Math.ceil(totalItems / this.perPage) + 1
        ),
      };
    },
  },
  created() {
    this.setPage(1);
  },
};
</script>

<style>
</style>