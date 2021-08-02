<template>
  <div class="home-page">
    <h1 class="home-page__title-country">Все страны</h1>

    <SliderCountryWines />
    <BtnLinkAllCountry />
  </div>
</template>



<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
// import { Carousel, Slide } from "vue-carousel";

import SliderCountryWines from "@/components/pageHome/SliderCountryWines";
import BtnLinkAllCountry from "@/components/pageHome/BtnLinkAllCountry";
export default {
  components: {
    // Carousel,
    // Slide,
    SliderCountryWines,
    BtnLinkAllCountry,
  },
  computed: {
    // t() {
    //   console.log(JSON.parse(localStorage.getItem("arrayItems")));
    // },
  },
  methods: {
    // testLocal() {
    //   localStorage.setItem(
    //     "arrayItems",
    //     JSON.stringify(this.$store.state.arrayItems)
    //   );
    // },
  },
  created() {
    // this.testLocal();
  },
};
</script>

<style lang="scss">
.home-page {
  &__title-country {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>