<template>
  <div class="home">
    <h1 class="text-center display-1 my-3 text--secondary font-italic header">
      All Tours
    </h1>
    <v-container>
      <v-row>
        <v-col cols="md-4 sm-6 xs-12">
          <Card />
        </v-col>
        <v-col cols="md-4 sm-6 xs-12">
          <Card />
        </v-col>
        <v-col cols="md-4 sm-6 xs-12">
          <Card />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Card from '../components/utils/Card';

export default {
  name: 'Home',
  components: {
    Card
  },
  methods: {
    ...mapActions(['allTours'])
  },
  created() {
    this.allTours();
  }
};
</script>

<style scoped>
.container {
  padding-top: 0 !important;
}

.col-3,
.col-2,
.col-1 {
  padding: 0;
}

.header {
  font-family: 'IBM Plex Serif', Arial;
}
</style>
