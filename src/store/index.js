import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    fetchTodo: function (context) {
      axios.get('http://localhost:3000/todo')
      .then(res => {
        context.commit('setTasks', res.data.tasks)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  getters: {
    taskCount: state => state.tasks.length,
    tasks: state => state.tasks
  },
  modules: {
  }
})
