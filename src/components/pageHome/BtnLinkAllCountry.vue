<template>
  <router-link to="/all-country" class="home-page__link-all-country">
    <v-btn depressed color="blue white--text"> смотреть все страны</v-btn>
  </router-link>
</template>

<script>
export default {};
</script>

<style>
.home-page__link-all-country {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.home-page__link-all-country:hover {
  text-decoration: none;
}
</style>