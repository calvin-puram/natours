<template>
  <div class="d-flex over">
    <v-card color="#009432" dark width="700px" v-for="num in number" :key="num">
      <v-card-text>
        {{ num }}
        "Turns out semicolon-less style is easier and safer in TS because most
        gotcha edge cases are type invalid as well."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  }
};
</script>

<style scoped>
.review-wrapper {
  /* height: 60vh; */
  background: #e0e0e0;
}

.over {
  overflow-x: scroll;
  width: 100%;
}

.v-card {
  margin: 2rem;
  padding: 1rem;
}
</style>
