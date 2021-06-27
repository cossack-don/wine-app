<template>
  <v-container class="page-all-country">
    <router-link to="/" class="ma-4 ml-0 d-block">Главная</router-link>
    <v-row>
      <v-col
        v-for="(item, index) in GETTER_RETURN_MAIN_ARRAY_FOR_SLIDER_COUNTRY"
        :key="index"
        cols="4"
      >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
          >
            <router-link
              :to="{ path: item.pathPage }"
              class="page-all-country__link d-flex justify-center align-center"
            >
              <img
                :src="item.urlImageFlagCountry"
                alt="item.country"
                class="page-all-country__image"
              />
              <br />
              <h3 class="text-lg-h6 page-all-country__title-county">
                {{ item.country }}
              </h3>
            </router-link>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["GETTER_RETURN_MAIN_ARRAY_FOR_SLIDER_COUNTRY"]),
  },
};
</script>

<style>
.page-all-country__image {
  width: 100%;
  height: auto;
}
.page-all-country__link {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 25px;
}

@media (max-width: 576px) {
  .page-all-country__image {
    width: 100px;
  }
}
@media (max-width: 450px) {
  .page-all-country__image {
    width: 70px;
  }
  .page-all-country__title-county {
    font-size: 15px;
  }
}
</style>