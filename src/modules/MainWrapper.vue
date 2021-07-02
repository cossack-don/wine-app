<template>
  <v-app id="inspire">
    <!-- header -->

    <WrapperAppBar />
    <!-- left bar -->
    <WrapperNavigationDrawer />
    <!-- main - content -pages -->
    <WrapperForMainPages />

    <v-footer color="primary lighten-1 mt-auto" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          <div class="text-center">
            <v-bottom-sheet v-model="sheet">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="purple" dark v-bind="attrs" v-on="on">
                  Open In
                </v-btn>
              </template>
              <v-list>
                <v-subheader>Open in</v-subheader>
                <v-list-item
                  v-for="tile in tiles"
                  :key="tile.title"
                  @click="sheet = false"
                >
                  <v-list-item-avatar>
                    <v-avatar size="32px" tile>
                      <img
                        :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                        :alt="tile.title"
                      />
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title>{{ tile.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-bottom-sheet>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import WrapperAppBar from "@/modules/app-bar/WrapperAppBar";
import WrapperNavigationDrawer from "@/modules/navigation-drawer/WrapperNavigationDrawer";
import WrapperForMainPages from "@/modules/main-content/WrapperForMainPages";

export default {
  components: {
    WrapperAppBar,
    WrapperNavigationDrawer,
    WrapperForMainPages,
  },
  data() {
    return {
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
      sheet: false,
      tiles: [
        { img: "keep.png", title: "Keep" },
        { img: "inbox.png", title: "Inbox" },
        { img: "hangouts.png", title: "Hangouts" },
        { img: "messenger.png", title: "Messenger" },
        { img: "google.png", title: "Google+" },
      ],
    };
  },
};
</script>
