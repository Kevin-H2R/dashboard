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
    },
    addTask(state, task) {
      state.tasks.push(task)
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
    taskCount: state => state.tasks.length,
    tasks: state => state.tasks.map(t => {
      t.done = t.done === 1
      return t
    })
  },
  modules: {
  }
})
