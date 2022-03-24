<template>
  <v-card>
    <v-card-title class="font-weight-light">{{ title }}</v-card-title>
    <v-card-text>
      <v-sheet color="grey darken-4">
        <v-sparkline
          :value="values"
          color="rgba(255, 255, 255, .7)"
          :gradient="['red', 'yellow']"
          height="100"
          padding="24"
          stroke-linecap="round"
          auto-draw-duration="1000"
          smooth
          auto-draw
          :key="sparklineKey"
        >
          <template v-slot:label="item"> {{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "health-report",
  created() {
    setInterval(() => {
      this.sparklineKey += 1
    }, 3000)
  },
  props: {
    values: {
      type: Array,
      requried: true,
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      sparklineKey: 0
    }
  }
};
</script>