<template>
  <div class="home">
    <h1 class="text-center display-1 my-4 font-weight-bold">All Tours</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["allTours"])
  },
  created() {
    this.allTours();
  }
};
</script>
