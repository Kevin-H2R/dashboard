import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    loadingTasks: true
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
      state.loadingTasks = false
    },
    resetTodo(state) {
      state.tasks = []
      state.loadingTasks = true
    },
    deleteTask(state, id) {
      let index = -1
      for (let i = 0; i < state.tasks.length; ++i) {
        if (state.tasks[i].id === id) {
          index = i
          break
        }
      }
      if (index !== -1) {
        state.tasks.splice(index, 1)
      }
    }
  },
  actions: {
    fetchTodo: function (context) {
      axios.get('http://'+ process.env.VUE_APP_HOST +':3000/todo')
      .then(res => {
        context.commit('setTasks', res.data.tasks)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  getters: {
    loadingTasks: state => state.loadingTasks,
    tasks: state => state.tasks
  },
  modules: {
  }
})
