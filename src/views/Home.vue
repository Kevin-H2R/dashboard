<template>
  <v-container fluid pa-5>
    <v-row>
      <todo-container />
    </v-row>
  </v-container>
</template>

<script>
import TodoContainer from '../components/todo/TodoContainer.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    TodoContainer,
  }
}
</script>