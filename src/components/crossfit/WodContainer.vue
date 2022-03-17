<template>
  <v-card>
    <v-card-title>WOD</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-container v-if="loading">
        <v-progress-circular color="primary" indeterminate/>
      </v-container>
      <v-container v-else>
        <v-row>
          <h2 class="mb-5 text-decoration-underline">{{ title }}</h2>
        </v-row>
        <v-row>
          <div v-html="description"/>
        </v-row>
        <v-row v-show="$store.getters.cookie === null">
          <v-btn color="primary" @click="login()" >Login</v-btn>
        </v-row>
        <v-row v-show="$store.getters.cookie !== null">
          <v-col cols="4">
            <register-button :time="7"/>
          </v-col>
          <v-col cols="4">
            <register-button :time="8"/>
          </v-col>
          <v-col cols="4">
            <register-button :time="9"/>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
import RegisterButton from './RegisterButton.vue';
export default {
  name: "wod-container",
  components: {RegisterButton},
  created() {
    const that = this
    axios.get("http://" + process.env.VUE_APP_HOST + ":3000/crossfit")
      .then(function (response) {
        that.title = response.data.title
        that.description = response.data.description
        that.loading = false
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    login: function () {
      axios.get("http://" + process.env.VUE_APP_HOST + ":3000/crossfit/login")
        .then(res => {
          console.log(res)
          this.$store.commit('setCookie', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register: function (time) {
      axios.post("http://" + process.env.VUE_APP_HOST + ":3000/crossfit/register", {cookie: this.cookie, time: time})
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  data() {
    return {
      loading: true,
      title: "",
      description: "",
      cookie: null
    };
  },
};
</script>
<style lang="scss">
</style>