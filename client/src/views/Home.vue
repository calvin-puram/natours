<template>
  <Card />
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
