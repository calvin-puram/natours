<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#009432" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-img src="/img/logo-green.png" width="140px"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- MENU -->
      <div class="text-center mr-5 ">
        <v-menu open-on-hover buttom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              color="white"
              class=" green--text font-weight-bold "
              v-on="on"
            >
              Explore
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list class="mt-1 text-center">
            <v-list-item v-for="(item, index) in items" :key="index" link>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- PROFILE -->
      <v-menu
        v-model="showMenu"
        open-on-hover
        buttom
        offset-y
        style="max-width: 300px"
      >
        <template v-slot:activator="{ on }">
          <v-avatar v-on="on" class="mr-5">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            link
            class="py-0"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    showMenu: false,
    items: [{ title: "Profile" }, { title: "Logout" }]
  })
};
</script>
