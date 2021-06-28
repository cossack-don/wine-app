<template>
  <div class="home-page">
    <h1 class="home-page__title-country">Все страны</h1>

    <SliderCountryWines />
    <BtnLinkAllCountry />
    можно сделать, все вина перейдя на страницу будет сортировка по
    красным,белым, розовым, выбрать страну
    <!-- <globalComponentBtnLinkAllCountry /> -->
    <!-- Потом делать -->

    <!-- <h1>слайдер по сахару</h1>
    <carousel :per-page="3">
      <slide> Сухое </slide>
      <slide> Полусухое </slide>
      <slide> Полусладкое </slide>
      <slide> Сладкое </slide>
    </carousel>
    <h1>слайдер по цвету</h1>
    <carousel :per-page="3">
      <slide>
        <img src="../assets/color-wine-slider/red-wine.jpg" alt="" class="fl" />
      </slide>
      <slide>
        <img
          src="../assets/color-wine-slider/white-wine.jpg"
          alt=""
          class="fl"
        />
      </slide>
      <slide>
        <img
          src="../assets/color-wine-slider/rose-wine.jpg"
          alt=""
          class="fl"
        />
      </slide>
    </carousel> -->
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