<template>
  <div>
    <Showcase />
    <Card />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Card from '../components/utils/Card';
import Showcase from '../components/Showcase';

export default {
  name: 'Home',
  components: {
    Card,
    Showcase
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
