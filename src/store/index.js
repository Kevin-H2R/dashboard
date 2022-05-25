import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    loadingTasks: true,
    cookie: null,
    login: null,
    registered: null,
    time: null,
    results: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results
    },
    addResult(state, result) {
      state.results.unshift(result)
    },
    setRegistered(state, registered) {
      state.registered = registered
    },
    setTime(state, time) {
      state.time = time
    },
    setLogin(state, login) {
      state.login = login
    },
    setCookie(state, cookie) {
      state.cookie = cookie
    },
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
      axios.get(process.env.VUE_APP_HOST + ':3000/todo')
        .then(res => {
          context.commit('setTasks', res.data.tasks)
        }).catch(err => {
          console.log(err)
        })
    },
  },
  getters: {
    loadingTasks: state => state.loadingTasks,
    tasks: state => state.tasks,
    cookie: state => state.cookie,
    login: state => state.login,
    registered: state => state.registered,
    time: state => state.time,
    results: state => state.results,
  },
  modules: {
  }
})
