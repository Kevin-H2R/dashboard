<template>
  <v-container fluid pa-5>
    <v-row>
      <v-col>
        <todo-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoContainer from '../components/todo/TodoContainer.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {TodoContainer}
}
</script>
    WodContainer