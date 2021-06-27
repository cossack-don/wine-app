<template>
  <div>
    <!-- компонент frd - карточка товара{{ $route.params.path }} -->
    <!-- <globalComponentBtnLinkAllCountry /> -->
    <div class="d-flex ma-4">
      <NavigationLinksPages />
      <router-link
        :to="`/${urlCountry}`"
        class="home-page__link-all-country d-block mt-4"
      >
        Вина {{ nameBtn }}
      </router-link>
    </div>

    <!-- test dicription wine -->
    <!-- <router-link>{{}}</router-link> -->
    <!-- <button @click="renderAllCountry">22</button> -->
    <!-- <div v-for="(item, index) in $store.state.arrayItems" :key="index">
      {{ item }} -->

    <!-- <div v-if="spain-item-vine"></div> -->
    <!-- </div> -->

    <!-- {{ arr }} -->
    <div v-for="item of arr">
      <!-- {{ $route.name }} -->
      {{ item }}
    </div>
  </div>
</template>

<script>
import NavigationLinksPages from "@/components/NavigationLinksPages.vue";
export default {
  computed: {},
  components: { NavigationLinksPages },
  data() {
    return {
      arr: {},
      nameBtn: "",
      urlCountry: "",
    };
  },
  created() {
    this.renderAllCountry();
    this.renderNameCountryForBtn();
  },
  methods: {
    renderNameCountryForBtn() {
      let nameRoute = this.$route.path;

      this.$store.state.arrayItems.find((item) => {
        // если в url есть имя france то тру, либо другое имя страны пример url /france/12/
        if (nameRoute.includes(item.pathPage)) {
          this.urlCountry = item.pathPage;
          this.nameBtn = item.country;
          // console.log(nameRoute.includes(item.pathPage), item.pathPage);
        }
      });
    },
    templateRenderItem(nameRounerCountry, indexCountryInMainArray) {
      if (this.$route.name === nameRounerCountry) {
        this.$store.state.arrayItems[indexCountryInMainArray].items.find(
          (item) => {
            if (+this.$route.params.id === item.id) {
              this.arr = item;
              console.log(this.$route);
            }
          }
        );
      }
    },

    renderAllCountry() {
      this.templateRenderItem("france-item-vine", 0);
      this.templateRenderItem("spain-item-vine", 1);
      //   this.renderCountryFrance();
      //   this.renderCountrySpain();

      //   console.log(this.$route);
    },
  },
};
</script>

<style>
</style>