<template>
  <div class="main-navigation-links d-flex justify-center ma-3">
    <ul
      class="main-navigation-links__list d-flex"
      v-for="(item, index) in listLinks"
      :key="index"
    >
      <li>
        <router-link
          :to="`${item.url}`"
          class="ma-4 ml-0 main-navigation-links__link"
          >{{ item.namePage }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLinks: [
        {
          url: "/",
          namePage: "Главная",
        },
        {
          url: "/all-country",
          namePage: "Все страны",
        },
        {
          url: "/favorites",
          namePage: "Избранное",
        },
        {
          url: "/search-page",
          namePage: "Поиск по товару",
        },
        // {
        //   url: "/",
        //   namePage: "Главная",
        // },
      ],
    };
  },
};
</script>

<style lang="scss">
.router-link-exact-active {
  color: #e91e63 !important;
  font-weight: bold;
}

.main-navigation-links {
  &__list {
    color: #e91e63;
  }
}
</style>