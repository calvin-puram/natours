<template>
  <div>
    <div v-if="isLoading">
      <Spinner />
    </div>
    <div>
      <div v-if="!isLoading"><Showcase /></div>

      <Card />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Card from '../components/utils/Card';
import Showcase from '../components/Showcase';
import Spinner from '../components/utils/Spinner';

export default {
  name: 'Home',
  computed: mapGetters(['isLoading']),
  components: {
    Card,
    Showcase,
    Spinner
  },
  data() {
    return {};
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
