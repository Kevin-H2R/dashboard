<template>
  <v-container fluid class="pa-5">
    <v-row>
      <nba-container />
    </v-row>
  </v-container>
</template>
<script>
import NbaContainer from '../components/nba/NbaContainer.vue'
export default {
  name: 'random-view',
  components: {NbaContainer}
}
</script>