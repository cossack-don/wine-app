<template>
  <!-- ДО 1024 ПК - 4 СЛАЙДЕРА-->
  <carousel
    :perPageCustom="[
      [1920, 6],
      [1500, 5],
      [1140, 4],
      [960, 3],
      [720, 3],
      [500, 2],
      [0, 1],
    ]"
    :autoplay="true"
    :loop="true"
    :autoplayTimeout="2500"
    :paginationSize="15"
    class="main-slider-country"
  >
    <slide
      v-for="(item, index) in GETTER_RETURN_MAIN_ARRAY_FOR_SLIDER_COUNTRY"
      :key="index"
      class="main-slider-country__item"
    >
      <div class="main-slider-country__link">
        <img
          :src="item.urlImageFlagCountry"
          alt="item.country"
          class="main-slider-country__image"
        />
        <br />
        <router-link :to="{ path: item.pathPage }">
          <h3 class="text-lg-h6">{{ item.country }}</h3>
        </router-link>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  computed: {
    ...mapGetters(["GETTER_RETURN_MAIN_ARRAY_FOR_SLIDER_COUNTRY"]),
  },
};
</script>

<style>
/* reset style main slider */
.VueCarousel-slide {
  height: 250px;
  justify-content: center;
}
.VueCarousel-dot-container {
  margin-top: 0 !important;
}
.VueCarousel-dot {
  margin-top: 0 !important;
}
/* end reset style main slider */

.main-slider-country__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-slider-country__image {
  width: 200px;
  height: auto;
  /* margin-bottom: 10px; */
}
.main-slider-country__link {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.main-slider-country__link:hover {
  transition: 0.5s;
  background: #eceff1;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.87);
  -moz-box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.87);
  box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.87);
  padding: 15px;
}
</style>