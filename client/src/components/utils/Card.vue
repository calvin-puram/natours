<template>
  <v-card :loading="loading" class="mx-auto " max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>The Park Camper</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="2.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>

      <div class="d-flex justify-space-around align-center mt-5">
        <div>
          <p>
            <v-icon left>mdi-map-marker-check-outline</v-icon>
            USA
          </p>
          <p>
            <v-icon left>mdi-calendar-check-outline</v-icon>
            June 2010
          </p>
        </div>

        <div>
          <p>
            <v-icon left>mdi-map-search</v-icon>
            3 Stops
          </p>
          <p>
            <v-icon left>mdi-account-group</v-icon>
            21 People
          </p>
        </div>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <div class="d-flex">
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>$ 23.7 per person</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="#009432" class="white--text" rounded>
          Details
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {}
};
</script>
