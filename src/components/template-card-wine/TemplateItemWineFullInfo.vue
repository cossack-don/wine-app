<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="mx-auto my-0">
          <div class="d-flex">
            <router-link
              :to="`/${urlCountry}`"
              class="home-page__link-all-country d-block mt-4"
            >
              Все позиции страны {{ russianNameCountry }}
            </router-link>
          </div>
          <v-card
            height=""
            class="pa-6 wrapper-card-wine-full"
            v-for="item in arr"
            :key="item.id"
          >
            <!-- {{ $route.name }} -->
            <!-- {{ item }} -->

            <div class="d-flex justify-space-between wrapper-card-full">
              <div class="d-flex flex-column align-center">
                <h3>{{ item.name }}</h3>
                <img
                  :src="item.urlImageWineItem"
                  alt=""
                  width="100"
                  class="ma-3"
                />
                <v-row justify="center">
                  <v-dialog v-model="dialog" width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        увеличиваем фото вина<v-icon>mdi-magnify-plus</v-icon>
                      </v-btn>
                    </template>
                    <v-card
                      class="d-flex justify-center flex-column align-center"
                    >
                      <v-btn
                        color="primary"
                        fab
                        small
                        dark
                        class="ml-auto mr-2 mt-2 zz"
                        @click="dialog = false"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <img
                        :src="item.urlImageWineItem"
                        alt=""
                        width="60%"
                        height="auto"
                        class="ma-3"
                      />
                    </v-card>
                  </v-dialog>
                </v-row>
              </div>

              <ul class="mt-15 pa-5 mr-auto list-wine-characteristics">
                <li class="d-flex list-wine-characteristics__item">
                  <v-icon>mdi-home-variant-outline</v-icon>{{ item.brend }}
                </li>
                <!-- <li class="d-flex list-wine-characteristics__item">
                  <v-icon>mdi-flag-variant-outline</v-icon
                  >{{ russianNameCountry }}
                </li> -->
                <li class="d-flex list-wine-characteristics__item">
                  <v-icon>mdi-water-outline</v-icon>{{ item.colorWine }}
                </li>
                <li class="d-flex list-wine-characteristics__item">
                  <v-icon>mdi-cube-outline</v-icon>{{ item.sugar }}
                </li>
                <li class="d-flex list-wine-characteristics__item">
                  <v-icon>mdi-bottle-wine-outline</v-icon>{{ item.capacity }} л.
                </li>
                <li class="d-flex list-wine-characteristics__item">
                  <v-icon>mdi-fruit-grapes-outline</v-icon
                  >{{ item.varietalComposition }}
                </li>
                <li class="d-flex list-wine-characteristics__item">
                  <v-icon>mdi-percent-outline</v-icon>13%
                </li>
              </ul>

              <div class="mt-15 pa-5">
                <div class="d-flex">
                  <img :src="flagCountry" alt="" width="30" height="auto" />
                  <p class="mt-auto mb-auto ml-2">{{ russianNameCountry }}</p>
                </div>
                <img :src="mapCountry" alt="" />
              </div>
              <div
                class="
                  d-flex
                  flex-column
                  ccc
                  mt-15
                  pa-5
                  list-wine-characteristics-testing
                "
              >
                <p class="mb-0 mr-2">
                  <b>Гастрономия:</b> {{ item.gastronomy }}
                </p>
                <p class="mb-0 mr-2">
                  <b>Дегустационные характеристики:</b>
                  {{ item.tastingCharacteristics }}
                </p>
                <p class="mb-0 mr-2">
                  <b>Выдержка:</b> {{ item.timeOfOrigin }}
                </p>
                <p class="mb-0 mr-2"></p>

                <br />
              </div>
            </div>
            фото-вин - бутылок этот слайдер как пример
            <SliderCountryWines />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SliderCountryWines from "@/components/pageHome/SliderCountryWines";
export default {
  computed: {},
  components: { SliderCountryWines },
  data() {
    return {
      arr: {},
      russianNameCountry: "",
      urlCountry: "",
      mapCountry: "",
      flagCountry: "",
      dialog: false,
    };
  },
  created() {
    this.renderAllCountry();
    this.renderNameCountryForBtn();
  },
  methods: {
    renderNameCountryForBtn() {
      console.log(this.$route.path);
      let nameRoute = this.$route.path;

      this.$store.state.arrayItems.find((item) => {
        // если в url есть имя france то тру, либо другое имя страны пример url /france/12/
        if (nameRoute.includes(item.pathPage)) {
          this.urlCountry = item.pathPage;
          this.russianNameCountry = item.country;
          this.mapCountry = item.urlImageMapCountry;
          this.flagCountry = item.urlImageFlagCountry;

          // console.log(nameRoute.includes(item.pathPage), item.pathPage);
        }
      });
    },
    templateRenderItem(nameRounerCountry, indexCountryInMainArray) {
      if (this.$route.name === nameRounerCountry) {
        this.$store.state.arrayItems[indexCountryInMainArray].items.find(
          (item) => {
            if (+this.$route.params.id === item.id) {
              this.arr = { item };
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
.zz {
  position: sticky;
  top: 15px;
  right: 15px;
}
.ccc {
  width: 50%;
  background: #f5f5f5;
  border-radius: 15px;
}
.list-wine-characteristics {
  list-style-type: none;
}
.list-wine-characteristics__item {
  margin-bottom: 10px;
  width: 130px;
}

@media (max-width: 1264px) {
  .wrapper-card-full {
    flex-wrap: wrap;
  }
  .list-wine-characteristics {
    margin-left: auto;
  }
  .list-wine-characteristics-testing {
    width: 100%;
  }
}
</style>