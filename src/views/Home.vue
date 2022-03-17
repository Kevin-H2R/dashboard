<template>
  <v-container fluid pa-5>
    <v-row>
      <v-col class="flex-shrink-1 flex-grow-0">
        <todo-container />
      </v-col>
      <v-col class="flex-shrink-1 flex-grow-0">
        <wod-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WodContainer from '../components/crossfit/WodContainer.vue'
import TodoContainer from '../components/todo/TodoContainer.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {TodoContainer, WodContainer}
}
</script>
    Wo
    WodContainerdContainer