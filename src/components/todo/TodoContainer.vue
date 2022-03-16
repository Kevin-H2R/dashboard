<template>
  <v-card class="todo-container" width="400">
    <v-card-title>Todo</v-card-title>
    <v-card-text>
      <v-container>
        <v-row align="center" class="mb-8">
          <v-text-field hide-details label="New task" v-model="newTask" />
          <v-btn color="primary" fab small @click="uploadNewTask()"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
        </v-row>
        <v-row justify="center">
          <v-progress-circular indeterminate color="primary" v-if="loading" />
          <v-list
            rounded
            width="100%"
            height="400"
            class="overflow-y-auto mylist"
            v-else
          >
            <v-list-item-group multiple>
              <todo-item
                v-for="(task, index) in $store.getters.tasks"
                :key="'task_' + index"
                v-bind="task"
              />
            </v-list-item-group>
          </v-list>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  name: "todo-container",
  created() {
    this.$store.dispatch("fetchTodo");
  },
  methods: {
    uploadNewTask() {
      if (this.newTask === "") {
        return;
      }
      axios
        .post("http://" + process.env.VUE_APP_HOST + ":3000/todo", {
          name: this.newTask,
        })
        .then((res) => {
          const task = res.data.task;
          if (task) {
            this.$store.commit("resetTodo")
            this.$store.dispatch("fetchTodo");
            this.newTask = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    loadingTasks() {
      return this.$store.getters.loadingTasks;
    },
    tasks() {
      return this.$store.getters.tasks;
    },
  },
  watch: {
    loadingTasks() {
      this.loading = false;
    },
  },
  data() {
    return {
      newTask: "",
      loading: this.$store.getters.loadingTasks,
    };
  },
};
</script>
<style lang="scss">
.v-list-item--active:before {
  opacity: 0;
}
.mylist::-webkit-scrollbar {
  width: 15px;
}

.mylist::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
  border-radius: 7px;
}

.mylist::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}
</style>