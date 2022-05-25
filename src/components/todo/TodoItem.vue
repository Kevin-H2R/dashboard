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
          >{{ titleData }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
              <v-icon small>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="modifyDialog = true">
              <v-list-item-title>Modify</v-list-item-title>
            </v-list-item>
            <v-list-item @click="deleteTask()">
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item-action>
      <v-dialog v-model="modifyDialog" width="500">
        <v-card>
          <v-card-title>Modify</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-text-field v-model="titleData"/>
              </v-row>
              <v-row>
                <v-textarea v-model="descriptionData" background-color="grey darken-4"/>
              </v-row>
              <v-row>
                <v-btn @click="modifyTask()" color="primary" :loading="modifyLoading">Modify</v-btn>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
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
      axios.post(process.env.VUE_APP_HOST + ":3000/todo/toggle", {
        id: this.id,
        done: this.isDone,
      });
    },
    modifyTask() {
      this.modifyLoading = true
      axios
        .post(process.env.VUE_APP_HOST + ":3000/todo/modify", {
          id: this.id,
          title: this.titleData,
          description: this.descriptionData
        })
        .then(() => {
          this.modifyDialog = false
          this.modifyLoading = false
          this.$store.commit("resetTodo", this.id);
          this.$store.dispatch("fetchTodo");
        });
    },
    deleteTask() {
      axios
        .post(process.env.VUE_APP_HOST + ":3000/todo/delete", {
          id: this.id,
        })
        .then(() => {
          this.$store.commit("resetTodo", this.id);
          this.$store.dispatch("fetchTodo");
        });
    },
  },
  data() {
    return {
      isDone: this.done,
      modifyDialog: false,
      titleData: this.title,
      descriptionData: this.description,
      modifyLoading: false
    };
  },
};
</script>