<template>
  <div>
    404 ERROR

    <div class="container">
      <h1 class="page-header">Pagination with Vue.JS</h1>
      <ul class="list-group">
        <li v-for="item in collection" class="list-group-item">
          {{ item.name }} + {{ item.age }}
        </li>
      </ul>
      <hr />
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
    </div>
  </div>
</template>

<script>
import lodashFunction_range from "lodash/range";
import lodashFunction_slice from "lodash/slice";
// НУЖНО ПЕРЕНОСИТЬ В СТОР И ПРОДУМАТЬ ГДЕ ОТОБРАЖАТЬ И КАК ОТОБРАЖАТЬ ПАГИНАЦИЮ И КАК БЫТЬ ПО СТРАНАМ В ОТДЕЛЬНОСТИ
export default {
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
      perPage: 2,
      pagination: {},
    };
  },

  computed: {
    collection() {
      return this.paginate(this.data);
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