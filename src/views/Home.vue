<template>
  <v-container fluid pa-5>
    <v-row justify="space-around">
      <v-col cols="12" sm="6" lg=4>
        <todo-container />
      </v-col>
      <v-col cols="12" sm="6" lg=4>
        <wod-container class="mb-2"/>
      </v-col>
      <v-col cols="12" sm="6" lg=4>
        <meteo-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WodContainer from '../components/crossfit/WodContainer.vue'
import TodoContainer from '../components/todo/TodoContainer.vue'
import MeteoContainer from '../components/meteo/MeteoContainer.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {TodoContainer, WodContainer, MeteoContainer}
}
</script>