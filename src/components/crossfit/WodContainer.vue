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
        <v-row class="mb-7">
          <v-divider/>
        </v-row>
        <v-row v-show="$store.getters.cookie === null">
          <v-btn color="primary" @click="login()" >Login</v-btn>
        </v-row>
        <v-row v-show="$store.getters.cookie !== null && !registered">
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
        <v-row justify="center" v-show="$store.getters.cookie !== null && registered">
          <v-col cols="10" class="text-center">
            <div>Booked at {{ time }}pm.</div>
            <v-btn color="warning" @click="cancel()">Cancel</v-btn>
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
          this.$store.commit('setCookie', res.data.cookie)
          this.registered = res.data.registered
          this.time = res.data.time
        })
        .catch(err => {
          console.log(err)
        })
    },
    register: function (time) {
      axios.post("http://" + process.env.VUE_APP_HOST + ":3000/crossfit/register", {cookie: this.$store.getters.cookie, time: time})
        .then(() => {
          this.registered = true
          this.time = time
        })
        .catch(err => {
          console.log(err)
        })
    },
    cancel: function () {
      axios.post("http://" + process.env.VUE_APP_HOST + ":3000/crossfit/cancel", {cookie: this.$store.getters.cookie, time: this.time})
        .then(() => {
          this.registered = null
          this.time = null
        })
    }
  },
  data() {
    return {
      loading: true,
      title: "",
      description: "",
      registered: null,
      time: null
    };
  },
};
</script>
<style lang="scss">
</style>