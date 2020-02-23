<template>
  <div>
    <!-- HERO SECTION -->
    <div v-if="isLoading">
      <Spinner />
    </div>
    <div>
      <div class="image" v-if="!isLoading">
        <v-img
          :src="`http://localhost:8000/img/tours/${getTour.imageCover}`"
          gradient="rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)"
        >
          <v-row
            class="white--text fill-height"
            align="center"
            justify="center"
          >
            <h1 class="heading hidden-xs-only ">{{ getTour.name }} Tour</h1>
          </v-row>
        </v-img>
      </div>
      <!-- NEXT -->
      <v-container class="p-0">
        <div class="section-a row ">
          <div class="col-md-4 col-sm-12">
            <div>
              <h2 class="text-center my-3 green--text headline">Quick Facts</h2>
              <div class="d-flex justify-space-between mb-2">
                <span class="font-weight-medium">NEXT DATE</span>
                <span>
                  {{ new Date(getTour.startDates[0]).toDateString() }}</span
                >
              </div>

              <div class="d-flex justify-space-between mb-2">
                <span class="font-weight-medium">DIFFICULTY</span>
                <span> {{ getTour.difficulty.toUpperCase() }}</span>
              </div>

              <div class="d-flex justify-space-between mb-2">
                <span class="font-weight-medium">PARTICIPANTS</span>
                <span> {{ getTour.maxGroupSize }} People</span>
              </div>

              <div class="d-flex justify-space-between ">
                <span class="font-weight-medium">RATINGS</span>
                <span>
                  {{ getTour.ratingsAverage }}/{{
                    getTour.ratingsQuantity
                  }}</span
                >
              </div>
            </div>
            <v-divider></v-divider>
            <!-- TOUR GUIDES -->
            <div class="guides">
              <h2 class="text-center mb-2 green--text headline">
                YOUR TOUR GUIDES
              </h2>
              <div
                class="d-flex justify-space-between align-items-center mb-2"
                v-for="guide in getTour.guides"
                :key="guide._id"
              >
                <span>
                  <v-avatar class="mr-3">
                    <img
                      :src="`http://localhost:8000/img/users/${guide.photo}`"
                      alt="John"
                    />
                  </v-avatar>
                  <span class="font-weight-medium">{{
                    guide.role === 'guide' ? 'Admin-Guide' : 'Lead-Guide'
                  }}</span>
                </span>
                <span>{{ guide.name }}</span>
              </div>
            </div>
          </div>

          <!-- NEXT -->
          <div class="col-md-8 col-sm-12">
            <div
              class="d-flex flex-column align-center justify-center ml-10 tour-description"
            >
              <h2 class="green--text my-2 headline">
                ABOUT {{ getTour.name.toUpperCase() }} TOUR
              </h2>
              <div v-for="para in getTour.description.split('\n')" :key="para">
                <p>{{ para }}</p>
              </div>
            </div>
          </div>
        </div>
      </v-container>
      <!-- TOUR DISPLAY -->
      <ImageDisplay />

      <!-- REVIEWS -->
      <div>
        <Reviews />
      </div>
      <!-- CTA -->
      <CTA />
    </div>
  </div>
</template>

<script>
import Reviews from '../components/utils/Reviews';
import CTA from '../components/utils/CTA';
import ImageDisplay from '../components/utils/TourDisplay';
import { mapGetters, mapActions } from 'vuex';
import Spinner from '../components/utils/Spinner';

export default {
  components: {
    Reviews,
    CTA,
    ImageDisplay,
    Spinner
  },
  computed: mapGetters(['getTour', 'isLoading']),
  data() {
    return {
      slug: this.$route.params.slug,
      loading: true
    };
  },
  methods: {
    ...mapActions(['singleTour']),
    handleLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  },
  watch: {
    $route(to, from) {
      this.slug = to.params.slug;
    }
  },
  created() {
    this.singleTour(this.slug);
    this.handleLoading();
  }
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
  margin-top: 1rem;
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
