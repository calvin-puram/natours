<template>
  <div class="d-flex over">
    <v-card
      color="#009432"
      dark
      v-for="review in getTour.reviews"
      :key="review._id"
    >
      <v-card-text>{{ review.review.slice(0, 80) }} </v-card-text>

      <v-card-actions>
        <v-list-item class="align-self-end">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              :src="`http://localhost:8000/img/users/${review.user.photo}`"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ review.user.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['getTour'])
};
</script>

<style scoped>
.review-wrapper {
  background: #e0e0e0;
}

.over {
  overflow-x: auto;
}

.v-card {
  margin: 2rem;
  height: 160px !important;
  min-width: 300px !important;
}

.v-card__actions {
  display: flex;
  align-items: flex-end !important;
  padding: 0;
}
</style>
