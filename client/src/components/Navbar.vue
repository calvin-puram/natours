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

    <v-app-bar app color="#009432" dark flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <router-link class="hidden-xs-only ml-5" to="/">
        <v-img src="/img/logo-green.png" width="140px"></v-img>
      </router-link>
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
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              link
              :to="item.route"
            >
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
        v-if="isLoggedIn"
      >
        <template v-slot:activator="{ on }">
          <v-avatar v-on="on" class="mr-5" v-if="getUser.photo">
            <img
              :src="`http://localhost:8000/img/users/${getUser.photo}`"
              alt="user"
            />
          </v-avatar>
        </template>

        <v-list>
          <v-list-item link class="py-0" to="/profile">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item link class="py-0" @click="handleLogout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import router from '../router/index';

export default {
  computed: mapGetters(['isLoggedIn', 'isLoading', 'getToken', 'getUser']),
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    showMenu: false,
    items: [
      { title: 'Login', route: '/login' },
      { title: 'Register', route: '/register' }
    ]
  }),
  methods: {
    ...mapActions(['logout', 'userProfile']),
    handleLogout() {
      this.logout().then(() => {
        this.$noty.success("You're loggout  successfully!");
      });
    }
  },
  created() {
    this.userProfile();
  }
};
</script>
