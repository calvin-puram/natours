<template>
  <div class="home">
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

<style scoped></style>
