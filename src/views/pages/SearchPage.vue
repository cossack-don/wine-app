<template>
  <div>
    <!-- {{ $store.state.testArraySearch }} -->
    <!-- {{ $store.state.T }} -->
    <!-- <div v-for="(item, index) in $store.state.T" :key="index">
      {{ item.name }}-{{ item.countryInItem }}
    </div> -->
    {{ $store.state.testArraySearch }}
    <v-container>
      <!-- навигация -->
      <!-- <NavigationLinksPages /> -->
      <v-row>
        <!-- адаптив https://vuetifyjs.com/en/components/grids/#usage -->
        <v-col
          class="card"
          v-for="(item, index) in $store.state.T"
          :key="index"
          cols="12"
          :xl="2"
          :lg="3"
          :md="4"
          :sm="6"
          :xs="12"
        >
          {{ $store.state.T.length }}
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
    </v-container>
  </div>
</template>

<script>
export default {
  //     testArray.forEach(nameWineString=> {
  // arrayItems.forEach(objectCountry => {
  //     objectCountry.items.find(itemWine => {
  //         if(itemWine.name === nameWineString) {
  //             console.log(itemWine)
  //         }
  //     })
  // })
  // })
};
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

/* .template-item-wine:hover .template-item-wine__icon-favorites {
  transition: 0.5s;
  opacity: 1;
} */

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

