<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox :input-value="done" color="primary"></v-checkbox>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: "todo-item",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  },
};
</script>