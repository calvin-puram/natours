<template>
  <div>
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-if="!loading">
      <Showcase />
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
    return {
      loading: true
    };
  },
  methods: {
    ...mapActions(['allTours']),
    handleLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  },
  created() {
    this.allTours();
    this.handleLoading();
  }
};
</script>

<style scoped></style>
