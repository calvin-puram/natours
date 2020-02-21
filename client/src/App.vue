<template>
  <v-app>
    <Navbar />
    <v-content>
      <Showcase />
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
    Showcase
  },

  data: () => ({
    //
  })
};
</script>
