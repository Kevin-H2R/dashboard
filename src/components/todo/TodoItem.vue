<template>
  <v-list-item>
    <template v-slot:default="{ active }">
      <v-list-item-action>
        <v-checkbox
          :input-value="active"
          v-model="isDone"
          color="primary"
          @click="toggleTask()"
        ></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title
          :class="isDone ? 'text-decoration-line-through' : ''"
          >{{ title }}</v-list-item-title
        >
      </v-list-item-content>
      <v-list-item-action>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
              <v-icon small>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="deleteTask()">
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>
<script>
import axios from "axios";
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
  methods: {
    toggleTask() {
      axios.post("http://" + process.env.VUE_APP_HOST + ":3000/todo/toggle", {
        id: this.id,
        done: this.isDone,
      });
    },
    deleteTask() {
      axios
        .post("http://" + process.env.VUE_APP_HOST + ":3000/todo/delete", {
          id: this.id,
        })
        .then(() => {
          this.$store.commit("deleteTask", this.id);
        });
    },
  },
  data() {
    if (this.id === 2) {
      console.log(this.done);
    }
    return {
      isDone: this.done,
    };
  },
};
</script>