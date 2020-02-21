<template>
  <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="colors[i]"
      height="100%"
      eager
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        '/img/showcase/tour-1-1.jpg',
        '/img/showcase/tour-4-1.jpg',
        '/img/showcase/tour-4-3.jpg',
        '/img/showcase/tour-6-2.jpg',
        '/img/showcase/tour-7-2.jpg'
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    };
  }
};
</script>
