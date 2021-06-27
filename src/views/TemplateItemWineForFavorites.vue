<template>
  <v-hover v-slot="{ hover }" open-delay="200">
    <v-card
      :elevation="hover ? 16 : 2"
      :class="{ 'on-hover': hover }"
      max-width="350"
      height="450"
      class="mx-auto d-flex flex-column justify-center align-center sss"
    >
      <div
        class="sq ml-auto mr-3"
        @click="addFavorites(item.id, objectFrance.country)"
      >
        X удалить,
      </div>

      <router-link :to="`/france/${item.id}`" class="sss">
        <img :src="item.urlImageWineItem" alt="" class="img-it" />
        <h3 class="text-center pa-3">{{ item.name }}</h3>
        <div class="d-flex">
          <p class="mb-0 mr-2">{{ objectFrance.country }},</p>
          <p class="mb-0 mr-2">{{ item.colorWine }},</p>
          <p class="mb-0 mr-2">{{ item.sugar }},</p>
          <p class="mb-0 mr-2">{{ item.capacity }} л.</p>
        </div>
      </router-link>
    </v-card>
  </v-hover>
</template>

<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["ACTION_LIKE"]),

    addFavorites(itemIdWine, nameCountry) {
      this.ACTION_LIKE({ itemIdWine, nameCountry });
    },
  },
};
</script>

<style>
</style>