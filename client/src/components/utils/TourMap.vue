<template>
  <div style="height: 400px; width: 100%">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <div v-for="popup in withPopup" :key="popup">
        <l-marker :lat-lng="popup">
          <l-popup>
            <div>
              Tour
            </div>
          </l-popup>
        </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  props: ['tour'],
  data() {
    return {
      zoom: 5,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: [],
      currentZoom: 11.5,
      center: {},
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    }
  },
  created() {
    this.tour.locations.forEach(tour => {
      this.withPopup.push(latLng(tour.coordinates[1], tour.coordinates[0]));
      this.center = latLng(tour.coordinates[1], tour.coordinates[0]);
    });
  }
};
</script>
