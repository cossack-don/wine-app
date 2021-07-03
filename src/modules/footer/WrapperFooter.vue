<template>
  <v-footer class="mt-auto box-shodow-footer" padless>
    <v-row justify="center" no-gutters>
      <v-col
        class="
          d-flex
          justify-center
          align-center
          flex-wrap
          lighten-2
          py-2
          text-center
          white--text
        "
        cols="12"
      >
        <div v-for="(link, index) in links" :key="index">
          <FooterLinks :link="link" />
        </div>
        <FooterHandlerDashbord />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import FooterLinks from "@/components/footer/FooterLinks.vue";
import FooterHandlerDashbord from "@/components/footer/FooterHandlerDashbord.vue";
export default {
  components: {
    FooterLinks,
    FooterHandlerDashbord,
  },
  data() {
    return {
      links: [
        {
          name: "Главная",
          url: "/",
        },
        {
          name: "Все страны",
          url: "/all-country",
        },
        {
          name: "Избранное",
          url: "/favorites",
        },
        {
          name: "Поиск по товару",
          url: "/search-page",
        },
      ],
    };
  },
};
</script>

<style>
.box-shodow-footer {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important;
}
</style>
   