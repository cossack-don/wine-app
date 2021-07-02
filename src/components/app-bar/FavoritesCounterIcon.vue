<template>
  <div class="favorites-header ml-3">
    <div class="wrapper-icon-favorites">
      <img
        src="@/assets/heart.png"
        alt=""
        class="wrapper-icon-favorites__image"
      />
      <!-- <v-icon large color="blue "> mdi-cards-heart 8 </v-icon> -->
      <p class="wrapper-icon-favorites__count mb-0">
        {{ GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES.length }}
      </p>
    </div>
    <router-link to="/favorites" class="d-flex justify-center align-center">
      Избранное
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES"]),
  },
};
</script>

<style>
.favorites-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-icon-favorites {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.wrapper-icon-favorites__image {
  width: 35px;
  height: auto;
  position: relative;
}

.wrapper-icon-favorites__count {
  position: absolute;
  color: white;
}
</style>