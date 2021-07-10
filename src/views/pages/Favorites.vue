<template>
  <v-container>
    <v-row v-if="GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES.length">
      <!-- адаптив https://vuetifyjs.com/en/components/grids/#usage -->
      <v-col
        class="card"
        v-for="(item, index) in GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES"
        :key="index"
        cols="12"
        :xl="2"
        :lg="3"
        :md="4"
        :sm="6"
        :xs="12"
      >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            max-width="350"
            height="470"
            class="
              mx-auto
              d-flex
              flex-column
              justify-center
              align-center
              template-item-wine
            "
          >
            <!-- block-icon-favorites -->

            <v-icon
              class="template-item-wine__icon-favorites ml-auto mr-3"
              @click="deleteItemFromFavorites(item.id, item.countryInItem)"
              large
              color="blue "
            >
              mdi-close-circle-outline
            </v-icon>

            <!-- link :to="`/${pathForUrlCountry(index)}/${id}`"-->
            <router-link
              :to="`/${item.pathPage}/${item.id}`"
              class="template-item-wine__link"
            >
              <!-- image -->
              <img
                :src="item.urlImageWineItem"
                alt=""
                class="template-item-wine__image"
              />

              <h3 class="text-center favorits-title-wine pa-3 black--text">
                {{ item.name }}
              </h3>
              <div class="d-flex">
                <p class="mb-0 mr-2 blue-grey--text">
                  {{ item.countryInItem }},
                </p>
                <p class="mb-0 mr-2 blue-grey--text">{{ item.colorWine }},</p>
                <p class="mb-0 mr-2 blue-grey--text">{{ item.sugar }},</p>
                <p class="mb-0 mr-2 blue-grey--text">{{ item.capacity }} л.</p>
              </div>
            </router-link>

            <!-- end link -->
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col class="card d-flex justify-center" cols="12">
        <v-alert
          color="primary mt-5"
          dark
          icon="mdi-heart"
          border="left"
          prominent
          width="50%"
        >
          В избранном ничего нету.
        </v-alert></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import TemplateMiniItemWine from "@/components/template-card-wine/TemplateItemWineMini.vue";
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";

export default {
  components: { TemplateMiniItemWine },
  computed: {
    ...mapState({
      // переменовать под objectCountry
      objectsCountry: (state) => state.arrayItems,
    }),
    ...mapGetters(["GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES"]),

    // renderItems() {
    //   return (this.testArray =
    //     this.GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES.arrayItemWineWithTrueFavorites);
    // },
  },
  data() {
    return {
      id: "",
      urlCountry: "",
      testArray: null,
    };
  },

  methods: {
    ...mapActions(["ACTION_DELETE_ITEM_FROM_FAVORITES"]),
    pathForUrlCountry(indexWineItem) {
      let urlCountry = [];

      this.GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES.find(
        (itemObjectFavorites) => {
          this.objectsCountry.forEach((item) => {
            if (itemObjectFavorites.countryInItem === item.country) {
              urlCountry.push(item.pathPage);
              this.id = itemObjectFavorites.id;
            }
          });
        }
      );
      // for (let i = 0; i < urlCountry.length; i++) {
      //   if (indexWineItem === i) {
      //     return urlCountry[i];
      //   }
      //   return false;
      // }
      return false;
    },
    deleteItemFromFavorites(idWine, nameCauntry) {
      this.ACTION_DELETE_ITEM_FROM_FAVORITES({ idWine, nameCauntry });

      //  this.$store.commit('updateMessage', e.target.value)
      //  this.$store.commit('updateMessage', e.target.value)
    },
  },
  created() {},
};
</script>

<style>
.favorits-title-wine {
  height: 70px;
}
</style>