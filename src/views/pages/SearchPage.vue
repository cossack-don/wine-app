<template>
  <div>
    <v-container>
      <!-- навигация -->
      <!-- <NavigationLinksPages /> -->
      <v-row v-if="$store.state.arrayResultSearchItemsWine.length">
        <v-col
          class="card"
          v-for="(item, index) in $store.state.arrayResultSearchItemsWine"
          :key="index"
          cols="12"
          :xl="2"
          :lg="3"
          :md="4"
          :sm="6"
          :xs="12"
        >
          {{ $store.state.arrayResultSearchItemsWine.length }}
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

                <h3 class="text-center pa-3 black--text">{{ item.name }}</h3>
                <div class="d-flex">
                  <p class="mb-0 mr-2 blue-grey--text">
                    {{ item.countryInItem }},
                  </p>
                  <p class="mb-0 mr-2 blue-grey--text">{{ item.colorWine }},</p>
                  <p class="mb-0 mr-2 blue-grey--text">{{ item.sugar }},</p>
                  <p class="mb-0 mr-2 blue-grey--text">
                    {{ item.capacity }} л.
                  </p>
                </div>
              </router-link>

              <!-- end link -->
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row v-else
        ><v-col
          class="card d-flex justify-center flex-column align-center"
          cols="12"
          ><v-alert color="primary" elevation="7" type="info" width="50%"
            >Поиск пуст</v-alert
          >
          <img src="@/assets/bg-search.png" alt="" /></v-col
      ></v-row>
    </v-container>

    <!-- 

     -->
  </div>
</template>

<script>
export default {};
</script>

<style>
/* флаг для добавления в избранное */
.activeFavoritesWine {
  fill: red;
}

.template-item-wine__link {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.template-item-wine__link:hover {
  text-decoration: none;
}

.template-item-wine__image {
  width: auto;
  height: 290px;
}

.template-item-wine__icon-favorites {
  transition: 0.5s;
  opacity: 1;
}

.template-item-wine__icon-favorites svg {
  width: 40px;
  height: 40px;
}

.template-item-wine__icon-favorites:hover {
  cursor: pointer;
}
</style>

