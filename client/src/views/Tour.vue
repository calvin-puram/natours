<template>
  <div>
    <!-- HERO SECTION -->
    <div class="image">
      <v-img
        src="/img/showcase/tour-1-1.jpg"
        gradient="rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)"
      >
        <v-row class="white--text fill-height" align="center" justify="center">
          <h1 class="heading hidden-xs-only ">
            The Park Camper Tour
          </h1>
        </v-row>
      </v-img>
    </div>
    <!-- NEXT -->
    <v-container class="p-0">
      <div class="section-a row ">
        <div class="col-md-6 col-sm-12">
          <div>
            <h2 class="text-center my-3 green--text headline">Quick Facts</h2>
            <div class="d-flex justify-space-around mb-2">
              <span class="font-weight-medium">NEXT DATE</span>
              <span> June 2020</span>
            </div>

            <div class="d-flex justify-space-around mb-2">
              <span class="font-weight-medium">DIFFICULTY</span>
              <span> MEDIUM</span>
            </div>

            <div class="d-flex justify-space-around mb-2">
              <span class="font-weight-medium">PARTICIPANTS</span>
              <span> 20 People</span>
            </div>

            <div class="d-flex justify-space-around mb-2">
              <span class="font-weight-medium">RATINGS</span>
              <span> 4.5/7</span>
            </div>
          </div>
          <!-- TOUR GUIDES -->
          <div class="guides">
            <h2 class="text-center my-3 green--text headline">
              YOUR TOUR GUIDES
            </h2>
            <div class="d-flex justify-space-around align-center mb-2">
              <span>
                <v-avatar class="mr-3">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
                <span class="font-weight-medium">LEAD GUIDE</span>
              </span>
              <span>John James</span>
            </div>

            <div class="d-flex justify-space-around align-center mb-2">
              <span>
                <v-avatar class="mr-3">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
                <span class="font-weight-medium">LEAD GUIDE</span>
              </span>
              <span>John James</span>
            </div>
          </div>
        </div>

        <!-- NEXT -->
        <div class="col-md-6 col-sm-12">
          <div
            class="d-flex flex-column align-center justify-center tour-description"
          >
            <h2 class="green--text my-2 headline">
              ABOUT THE PARK CAMPER TOUR
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <!-- TOUR DISPLAY -->
      <ImageDisplay />
      <!-- MAP -->
      <Map />
      <!-- REVIEWS -->
      <div>
        <Reviews />
      </div>
    </v-container>
    <!-- CTA -->
    <CTA />
  </div>
</template>

<script>
import Map from '../components/utils/Map';
import Reviews from '../components/utils/Reviews';
import CTA from '../components/utils/CTA';
import ImageDisplay from '../components/utils/TourDisplay';
// import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Map,
    Reviews,
    CTA,
    ImageDisplay
  },
  
  
};
</script>

<style scoped>
.v-image {
  height: 70vh;
  width: 100vw;
}
.heading {
  font-size: 3rem;
  font-family: 'IBM Plex Serif', Arial;
}

.guides {
  margin-top: 3rem;
}

.tour-description {
  height: 100%;
}

@media screen and (max-width: 500px) {
  .headline {
    font-size: 1.3rem !important;
  }
  p {
    font-size: 15px;
    text-align: center;
  }

  span {
    font-size: 16px;
  }
}
</style>
