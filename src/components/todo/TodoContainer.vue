<template>
    <v-card>
        <v-card-title>Todo</v-card-title>
        <v-card-text>
            <v-container>
                <v-row align="center" class="mb-8">
                    <v-text-field hide-details label="New task" v-model="newTask"/>
                    <v-btn color="primary" fab small><v-icon>mdi-plus</v-icon></v-btn>
                </v-row>
                <v-row justify="center">
                    <v-progress-circular indeterminate color="primary" v-if="loading"/>
                    <v-list rounded width="100%" v-else>
                        <v-list-item-group multiple>
                            <todo-item v-for="(task, index) in $store.getters.tasks"
                                :key="'task_' + index" v-bind="task"
                            />
                        </v-list-item-group>
                    </v-list>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
  components: { TodoItem },
    name: 'todo-container',
    created() {
        this.$store.dispatch('fetchTodo')
    },
    computed: {
        taskCount() {
            return this.$store.getters.taskCount
        },
        tasks() {
            return this.$store.getters.tasks
        }
    },
    watch: {
        taskCount() {
            this.loading = false
        }
    },
    data() {
        return {
            newTask: "",
            loading: true
        }
    }
}
</script>
<style lang="scss" scoped>

</style>